if('serviceWorker' in navigator) navigator.serviceWorker.register('/jorband/dev-sw.js?dev-sw', { scope: '/jorband/', type: 'classic' })