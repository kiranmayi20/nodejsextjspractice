Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',
   
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
              }
   }
});
