/**
 * Secure Digital Archive - Application JavaScript
 */

(function() {
    'use strict';

    const CONFIG = {
        MAX_FILE_SIZE: 500 * 1024 * 1024,
        STORAGE_LIMIT: 10 * 1024 * 1024 * 1024,
        ALLOWED_TYPES: {
            'document': ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'],
            'image': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'],
            'audio': ['.mp3', '.wav', '.ogg', '.flac', '.aac', '.m4a'],
            'video': ['.mp4', '.avi', '.mkv', '.webm', '.mov']
        },
        DEFAULT_CATEGORIES: ['Documents', 'Images', 'Audio', 'Video', 'Personal', 'Work', 'Research'],
        VERSION: '1.0.0'
    };

