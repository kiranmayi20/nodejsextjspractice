/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.treelist.TreeList', {
  extend: 'Ext.tree.Panel',
  require: ['MyApp.view.treelist.TreeViewModel'],
  xtype: 'treelist',
  viewModel: {
    type: 'treeviewmodel'
  },
  bind: {
    store: '{treeListStore}'
  },
  title:'My tree Panel',
  displayField: 'text',
  preventHeader: true,
  clearOnLoad: true,
  collapsed: false,
  lines: true,
  rootVisible: true,
  margin: '4 0 4 4',
  autoScroll: true,
    listeners: {
      itemclick: function(record, item, index) {
        var form = this.getView().up('app-main').down('form');
        if (item.get('leaf') == false) {
          form.removeAll();
          form.add({
            xtype: 'displayfield',
            value: 'This is interenal root'
          }, {
            xtype: 'rootform',
            store: record.up('treelist'),
            recordData: item
          })
        } else {
          form.removeAll();
          form.add({
            xtype: 'leafform',
            store: record.up('treelist'),
            recordData: item
          });
        }
      }
    }
});