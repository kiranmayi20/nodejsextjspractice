/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    initComponent: function () {
        var me = this;
        Ext.Ajax.request({
            url: 'getTables',
            success: function (response) {
                var x = Ext.ComponentQuery.query('grid')[0];
                var responsedata = Ext.decode(response.responseText);
                x.getStore().loadData(responsedata);
                //   x.getStore().loadData();
                //  x.setDisplayField('Name');
            },
            failure: function () {
            }
        })

        me.callParent(arguments);
    },
    columns: [
        { text: 'username',  dataIndex: 'username' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'UserId', dataIndex: 'userid', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
