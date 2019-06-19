Ext.define('Myapp.store.RootNames',{
    extend : 'Ext.data.Store',
    alias : 'store.rootnames',
    proxy : {
        type : 'ajax',
        url : 'resources/data/RootNames.json',
        reader : {
            type : 'json'
        }
    }
    
});