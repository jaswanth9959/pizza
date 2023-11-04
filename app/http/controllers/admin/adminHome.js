function adminHome() {
  return {
    async index(req, res) {
      return res.render("admin");
    },
  };
}

module.exports = adminHome;
