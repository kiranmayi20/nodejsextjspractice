Ext.define('MyApp.view.treewindow.TreeWindow',{
   extend : 'Ext.window.Window',
    reference : 'treewindow',
    requires : ['MyApp.view.treelist.TreeViewModel',
                 'MyApp.view.treewindow.TreeWindowController'  ],
    controller : 'windowcontroller',
    viewModel:{
        type:'treeviewmodel'
      },
     width : 400,
     height : 500,
       initComponent  : function() {
        var storeData = this.storeData;
           this.html = "successfully created window",
             
             this.items = [{
                 xtype : 'combobox',
                 fieldLabel : 'Select The Parent Name',
                 displayField : 'rootNames',
                 queryMode: 'local',
                 store:storeData,
                 listeners : {
                     change : 'onRootSelect'
                 }
             },{
                 xtype : 'combobox',
                 store : ['Leaf','Root'],
                 displayField : 'name',
                 reference : 'leafroot',
                 fieldLabel : 'select the leaf or root',
                 listeners : {
                     change : 'onTypeSelect'
                 },
                 hidden : true
             },
             {
                 xtype : 'textfield',
                 name : 'newRootName',
                 reference : 'addnewroot',
                 fieldLabel : 'Name of the Root',
                 hidden : true
             }],
             this.bbar = [{
                 xtype : 'button',
                 text : 'submit',
                 handler : 'onSubmit'
             }]
        this.callParent();
       }
});