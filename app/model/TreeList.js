Ext.define('MyApp.model.TreeList', {
    extend: 'Ext.data.TreeModel',

    proxy: {
        type: 'ajax',
        url: 'resources/data/TreeList.json',
        reader: {
            type: 'json',
            rootProperty: 'children',
            successProperty: 'success',
            totalProperty: 'total'
        }

    }

});