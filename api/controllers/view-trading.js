module.exports = {


  friendlyName: 'View trading',


  description: 'Display "Trading" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/trading'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
