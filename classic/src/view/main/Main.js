/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.panel.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',
    'MyApp.view.treelist.TreeList',
    'MyApp.view.main.MainController',
    'MyApp.view.main.MainModel',
    'MyApp.view.treelist.TreeViewModel',
    'MyApp.view.main.List',
    'MyApp.view.mainform.RootForm',
    'MyApp.view.mainform.LeafForm'

  ],

  controller: 'main',
  viewModel: 'main',
  layout: 'border',
  
  items: [
    {
      region: 'west',
      width: 250,
      xtype: 'treelist'
    }, {
      region: 'center',
      xtype: 'form'
    },
    {
      region: 'south',
      xtype: 'button',
      text: 'Add New Node to the tree',
      handler: function() {
        var c = this.up('app-main').down('treelist').getRootNode();
        c.appendChild({
          text: 'new node to the root',
          leaf: true
        })
      }
    }
  ]

});
