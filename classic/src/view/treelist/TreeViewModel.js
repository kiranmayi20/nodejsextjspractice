/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.treelist.TreeViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MyApp.model.TreeList'],
    alias: 'viewmodel.treeviewmodel',
    stores: {
        treeListStore: {
            type: 'tree',
            model: "MyApp.model.TreeList",
            autoLoad: true,
            
        },
    }
});