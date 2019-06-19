/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.treelist.TreeList', {
    extend: 'Ext.tree.Panel',
    require : ['MyApp.view.treelist.TreeViewModel'],
    reference : 'treelist',
    
    xtype : 'treelist',
    viewModel:{
      type:'treeviewmodel'
    },
     bind:{
            store:'{treeListStore}'
            },
      displayField:'text',
    preventHeader: true,
    clearOnLoad: true,
    collapsed: false,
    lines: true,
    rootVisible: true,
    margin: '4 0 4 4',
    autoScroll: true,
    listeners: {
      itemclick: function(s,r) {
      },
   
  }
   
});