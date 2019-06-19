Ext.define('MyApp.view.addingtrees.AddingTrees',{
    extend : 'Ext.container.Container',
    xtype : 'addingtrees',
    requires : ['MyApp.view.treewindow.TreeWindow'],
    layout : {
        type  : 'vbox',
        pack  : 'center',
        align : 'middle'             
    },
    items : [{
        xtype : 'button',
         width : '50%',
        text : 'Add a Root or a Leaf',
        handler : function(a,b) {
                var main = this.up('addingtrees').up('app-main'),
                    treeListStore = main.lookupReference('treelist').getViewModel().getStore('treeListStore'),
                    rootNameStore = main.lookupReference('treelist').getViewModel().getStore('rootName'),
                         treeView = main.lookupReference('treelist')            
                    treeData = treeListStore.getData();
                              var rootName;
                           for(var i = 0;i<treeData.length;i++) {
                               rootName = treeData.items[i].data.text;
                               rootNameStore.add({rootNames : rootName});
                               if(treeData.items[i].data.children) {
                                     for(var j = 0; j < treeData.items[i].data.children.length;j++) {
                                      var subChildren = treeData.items[i].data.children[j].text;
                                      rootNameStore.add({ rootNames : subChildren })
                                     }
                               }
                           } 
               var window = Ext.create('MyApp.view.treewindow.TreeWindow',{
                   storeData :rootNameStore,
                   treeView : treeView
               });
                   window.show();
        }

    }]
})