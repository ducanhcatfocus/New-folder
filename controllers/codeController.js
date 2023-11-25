const CodeModel = require("../models/code.model");

const codeController = {
  createCodeProblem: async (req, res) => {
    try {
      const { titleProblem, codeContent, description, poster, type } = req.body;
      console.log(titleProblem);
      const code = await CodeModel.findOne({ titleProblem });
      console.log(code);

      if (code) {
        return res.redirect("back");
      }
      const newCode = new CodeModel({
        titleProblem,
        codeContent,
        description,
        poster,
        type,
      });
      console.log(newCode);

      await newCode.save();
      res.redirect("/");
    } catch (error) {
      return res.redirect("back");
    }
  },

  viewAllCodeProblem: async (req, res) => {
    try {
      const codes = await CodeModel.find({});
      res.render("home", { codes: codes });
    } catch (error) {
      console.log(error);
      return res.redirect("back");
    }
  },

  getCreateCodeProblem: async (req, res) => {
    try {
      res.render("add-code");
    } catch (error) {
      return res.redirect("back");
    }
  },

  getCodeProblemById: async (req, res) => {
    try {
      const code = await CodeModel.findById(req.params.id);
      if (!code) {
        return res.redirect("back");
      }
      res.render("code", { code });
    } catch (error) {
      return res.redirect("back");
    }
  },

  getCodeProblemByType: async (req, res) => {},

  updateCodeProblem: async (req, res) => {
    try {
      const { codeContent, description } = req.body;

      await User.findOneAndUpdate(
        { _id: req.params.id },
        { codeContent, description }
      );
      //res.redirect("/home/accounts");
    } catch (error) {
      return res.redirect("back");
    }
  },
};

module.exports = codeController;
