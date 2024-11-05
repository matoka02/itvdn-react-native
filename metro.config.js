const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

// Добавление поддержки файлов с расширением 'mjs'
config.resolver.sourceExts.push('mjs');

module.exports = config;