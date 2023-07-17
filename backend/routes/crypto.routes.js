const {Router} = require(`express`);
const {getCrypto, deleteCrypto, postCrypto, patchCrypto, getCryptoOne} = require("../controllers/crypto.controllers.js")

const router = Router();

router.get("/", getCrypto);
router.post("/", postCrypto);
router.delete("/:id", deleteCrypto);
router.patch("/:id", patchCrypto);
router.get("/one/:id", getCryptoOne)

module.exports = router