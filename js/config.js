define([], function() {
    'use strict';

    var API = 'http://localhost:5000';

    var services = {
        'packages': {
            'name': 'Packages',
            'description': '<p> Manage packages.</p>',

            'calls': {
                'list': {
                    'description': 'Packages registered.',
                    'params': {
                        'auth_token': 'string'
                    },
                    'url': API + '/packages',
                    'method': 'GET'
                },
                'single package': {
                    'description': 'Shows the given user info.',
                    'params': {
                        'auth_token': 'string',
                        'id': 'integer'
                    },
                    'url': API + '/packages/[id]',
                    'urlWithId': 'id',
                    'method': 'GET'
                },
                'update package': {
                    'description': 'Updates an user.',
                    'params': {
                        'auth_token': 'string',
                        'id': 'integer',
                        'email': 'string',
                        'username': 'string',
                        'phone_number': 'string',
                        'password': 'string',
                        'password_confirmation': 'string'
                    },
                    'url': API + '/packages/[id]',
                    'urlWithId': 'id',
                    'wrapper': 'user',
                    'method': 'PUT'
                },
                'create new package': {
                    'description': 'Posts a package.',
                    'params': {
                        'auth_token': 'string',
                        'title': 'string',
                        'description': 'string',
                        'price': 'float',
                    },
                    'url': API + '/packages',
                    'wrapper': 'package',
                    'method': 'POST'
                }
            }
        }
    };

    return {
        services: services
    };
});
