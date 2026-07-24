export default {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    testTimeout: 30000,
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};
