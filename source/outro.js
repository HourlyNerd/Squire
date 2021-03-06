/*jshint ignore:start */

if ( typeof exports === 'object' ) {
    module.exports = Squire;
} else {
    if ( typeof win.DISABLE_SQUIRE === 'undefined' && top !== win ) {
        win.editor = new Squire( doc );
        if ( win.onEditorLoad ) {
            win.onEditorLoad( win.editor );
            win.onEditorLoad = null;
        }
    } else {
        win.Squire = Squire;
    }
}

}( document ) );
