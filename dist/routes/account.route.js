"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _account = _interopRequireDefault(require("../controllers/account.controller"));

var _SchemaValidator = _interopRequireDefault(require("../middlewares/SchemaValidator"));

var _AuthMiddleware = _interopRequireDefault(require("../middlewares/AuthMiddleware"));

var _PermissionMiddleware = _interopRequireDefault(require("../middlewares/PermissionMiddleware"));

var router = (0, _express.Router)();
var validateRequest = (0, _SchemaValidator["default"])();
router.post('/accounts', _AuthMiddleware["default"], validateRequest, _account["default"].createBankAccount);
router.get('/accounts', _AuthMiddleware["default"], _PermissionMiddleware["default"].staffPermission, _account["default"].fetchAllAccounts);
router.get('/accounts/:accountNumber', _AuthMiddleware["default"], _PermissionMiddleware["default"].strictAccountPermission, _account["default"].getAccount);
router.patch('/accounts/:accountNumber', _AuthMiddleware["default"], validateRequest, _PermissionMiddleware["default"].adminPermission, _account["default"].changeStatus);
router["delete"]('/accounts/:accountNumber', _AuthMiddleware["default"], _PermissionMiddleware["default"].staffPermission, _account["default"].deleteAccount);
var _default = router;
exports["default"] = _default;