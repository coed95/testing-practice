module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
    },
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['**/__tests__/**/*.(js|jsx)', '**/?(*.)+(spec|test).(js|jsx)']
};