const router = require("express").Router();

const codeController = require("../controllers/codeController");

router.route("/").get(codeController.viewAllCodeProblem);

router
  .route("/add_code_problem")
  .get(codeController.getCreateCodeProblem)
  .post(codeController.createCodeProblem);

router
  .route("/code/:id")
  .get(codeController.getCodeProblemById)
  .post(codeController.updateCodeProblem);

module.exports = router;
