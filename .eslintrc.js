module.exports = {
    "env": {
      "es6": true,
      "node": true,
      "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    },
    "globals": {
        "$": false,
        "google": false,

        "SIMULATED_DELAY_MS": false,
        "MARKER_W": false,
        "MARKER_H": false,
        "N_MOCK_PICS": false,
        "MIN_TITLE_CHARACTERS": false,
        "MARKER_ICON_GREEN": false,
        "MARKER_ICON_YELLOW": false,
        "MARKER_ICON_RED": false,
        "MARKER_ICON_GRAY": false,
        "STRUCTURE_TYPES": false,
        "GMAPS_DIRECTIONS_URL": false,

        "Database": true,
        "map": true,
        "geocoder": true,
        "markers": true,
        "tags": true,
        "_gmarkers": true,
        "areMarkersHidden": true,
        "addLocationMode": true,
        "openedMarker": true,
        "currentPendingRating": true,
        "uploadingPhotoBlob": true,
        "templates": true,
    }
};