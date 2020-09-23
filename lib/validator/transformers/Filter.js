var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import _ from 'lodash';
import { IterateeTransformer } from './Iteratee';
var FilterTransformer = /** @class */ (function (_super) {
    __extends(FilterTransformer, _super);
    function FilterTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterTransformer, "title", {
        get: function () {
            return 'Filter';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterTransformer, "name", {
        get: function () {
            return 'filter';
        },
        enumerable: false,
        configurable: true
    });
    FilterTransformer.prototype.transform = function (value, args) {
        var _a;
        var iteratee = args.iteratee;
        return (_a = _.filter(value, this.getIteratee(iteratee))) !== null && _a !== void 0 ? _a : null;
    };
    return FilterTransformer;
}(IterateeTransformer));
export { FilterTransformer };