Ext.define('MyApp.model.RootNames', {
    extend: 'Ext.data.Model',

    proxy : {
        type : 'ajax',
        url : 'resources/data/RootNames.json',
        reader : {
            type : 'json',
            rootProperty : 'data'
        }
    }

});