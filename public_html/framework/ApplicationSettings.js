

ApplicationSettings = function ( title, width, height )
{
    this.title = title;
    this.width = width;
    this.height = height;
};

ApplicationSettings.prototype =
{
    constructor: ApplicationSettings,
            
    exitRequested: false,
    fullscreen: false,
    
    requestExit: function ( )
    {
        this.exitRequested = true;
    },
       
    getAspectRatio: function ( )
    {
        return this.width / this.height;
    },
       
    isExitRequested: function ( )
    {
        return this.exitRequested;
    },
            
    isFullScreen: function ( )
    {
        return this.fullscreen;
    },
    
    getWidth: function ( )
    {
        return this.width;
    },
            
    getHeight: function ( )
    {
        return this.width;
    }
};
