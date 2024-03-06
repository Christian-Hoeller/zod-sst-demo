import fs from 'fs/promises';
import { join } from 'path';

const schemaDirectoryPath = join(__dirname, '../src/schemas');

(async () => {
    await generateSchemaIndex();
    await generateTypesIndex();
})();

async function generateSchemaIndex() {
    // check if the src/schemas directory exists exit with an error if it doesn't
    try {
        await fs.access(schemaDirectoryPath);
    } catch (e) {
        console.error('The src/schemas directory does not exist');
        process.exit(1);
    }

    const files = await fs.readdir(schemaDirectoryPath);

    // if the index.ts file exists, delete it
    try {
        await fs.access(join(schemaDirectoryPath, 'index.ts'));
        await fs.unlink(join(schemaDirectoryPath, 'index.ts'));
        console.log('Deleted schemas/index.ts');
    }
    catch (e) {
        console.log('Didn\'t delete index.ts because it doesn\'t exist.');
    }

    // iterate through all the schema files and extract the name (split by . and remove the .schema.ts)
    const exportString = files
        .filter(file => file.endsWith('.ts') && file !== 'index.ts')
        .map(file => file.replace('.ts', ''))
        .map(name => `export * from './${name}';\n`)
        .join('');

    // write the file to the src/schemas directory
    console.log('Writing to schemas/index.ts\n');
    console.log(exportString);

    await fs.writeFile(join(schemaDirectoryPath, 'index.ts'), exportString);

    console.log('Wrote to schemas/index.ts\n');
}

async function generateTypesIndex() {
    const lines = [
        `import { z } from "zod";\n`
    ];

    /**
     * Example File to Generate from the Schemas:
     * 
     * import { z } from "zod";
     * import { OneSchema, TwoSchema } from "./schemas";
     * 
     * export type One = z.infer<typeof OneSchema>;
     * export type Two = z.infer<typeof TwoSchema>;
     */

    const files = await fs.readdir(schemaDirectoryPath);

    // iterate through all the schema files and extract the name (split by . and remove the .schema.ts)
    const schemaNames = files
        .filter(file => file.endsWith('.ts') && file !== 'index.ts')
        .map(file => file.replace('.schema.ts', ''))
        .map(name => name.charAt(0).toUpperCase() + name.slice(1));

    // iterate through the schema names and create the import and export lines

    lines.push(
        `import { ${schemaNames.map(e => `${e}Schema`).join(', ')} } from "../schemas";\n\n`
    );

    lines.push(
        ...schemaNames.map(name => `export type ${name} = z.infer<typeof ${name}Schema>;\n`)
    );

    // check if the src/types directory exists and create it if it doesn't
    const typesDirectoryPath = join(__dirname, '../src/types');
    
    try {
        await fs.access(typesDirectoryPath);
    } catch (e) {
        await fs.mkdir(typesDirectoryPath);
    }

    try {
        await fs.access(join(typesDirectoryPath, 'index.ts'));
        await fs.unlink(join(typesDirectoryPath, 'index.ts'));
        console.log('Deleted types/index.ts.');
    } catch (e) {
        console.log("Didn\'t delete index.ts because it doesn\'t exist.");
    }

    // write the file to the src/types directory
    await fs.writeFile(join(typesDirectoryPath, 'index.ts'), lines.join(''));

    console.log('Writing to types/index.ts');
}