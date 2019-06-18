Ext.define('MyApp.view.mainform.RootForm', {
  extend: 'Ext.form.Panel',
  xtype: 'rootform',
  requires: ['MyApp.ux.ChatSocket'],

  items: [{
    xtype: 'textfield',
    name: 'text',
    fieldLabel: 'Enter Leaf name'
  }, {
    xtype: 'button',
    text: 'save',
    handler: function() {
      debugger;
      var me = this;
      var window = Ext.create('Ext.window.Window', {
        height: 200,
        width: 300,
        items: [{
          xtype: 'form',
          // initComponent: function() {
          //   var me = this;
          //   me.socket = Ext.create('MyApp.ux.ChatSocket');

          // }
        }]
      });
      window.show();
    // var mainTree = this.up('rootform'),
    // selectedNode;
    // if (mainTree.store) {
    //    selectedNode = mainTree.store.getSelection()[0];
    //    var leafObj = this.up('rootform').getValues();
    //    leafObj.leaf = true;
    //    selectedNode.appendChild(leafObj);
    // }else{
    //     mainTree = mainTree.up('leafform');
    //     selectedNode = mainTree.store.getSelection()[0];
    //     var leafObj = this.up('rootform').getValues();
    //     leafObj.leaf = true;
    //     selectedNode.appendChild(leafObj);
    // }
    }
  }]
});