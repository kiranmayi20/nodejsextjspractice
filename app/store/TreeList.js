Ext.define('MyApp.store.TreeList', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.TreeList',
   
    storeId: 'myStore',
    proxy: {
        type: 'ajax',
        url: 'resources/data/TreeList.json', //Actually some rest call url
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
