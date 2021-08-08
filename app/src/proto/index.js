/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.layout21 = (function() {

    /**
     * Namespace layout21.
     * @exports layout21
     * @namespace
     */
    var layout21 = {};

    layout21.raw = (function() {

        /**
         * Namespace raw.
         * @memberof layout21
         * @namespace
         */
        var raw = {};

        raw.Point = (function() {

            /**
             * Properties of a Point.
             * @memberof layout21.raw
             * @interface IPoint
             * @property {number|Long|null} [x] Point x
             * @property {number|Long|null} [y] Point y
             */

            /**
             * Constructs a new Point.
             * @memberof layout21.raw
             * @classdesc Represents a Point.
             * @implements IPoint
             * @constructor
             * @param {layout21.raw.IPoint=} [properties] Properties to set
             */
            function Point(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Point x.
             * @member {number|Long} x
             * @memberof layout21.raw.Point
             * @instance
             */
            Point.prototype.x = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Point y.
             * @member {number|Long} y
             * @memberof layout21.raw.Point
             * @instance
             */
            Point.prototype.y = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Point instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Point
             * @static
             * @param {layout21.raw.IPoint=} [properties] Properties to set
             * @returns {layout21.raw.Point} Point instance
             */
            Point.create = function create(properties) {
                return new Point(properties);
            };

            /**
             * Encodes the specified Point message. Does not implicitly {@link layout21.raw.Point.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Point
             * @static
             * @param {layout21.raw.IPoint} message Point message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Point.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.x);
                if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.y);
                return writer;
            };

            /**
             * Encodes the specified Point message, length delimited. Does not implicitly {@link layout21.raw.Point.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Point
             * @static
             * @param {layout21.raw.IPoint} message Point message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Point.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Point message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Point
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Point} Point
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Point.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Point();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.int64();
                        break;
                    case 2:
                        message.y = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Point message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Point
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Point} Point
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Point.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Point message.
             * @function verify
             * @memberof layout21.raw.Point
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Point.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x) && !(message.x && $util.isInteger(message.x.low) && $util.isInteger(message.x.high)))
                        return "x: integer|Long expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y) && !(message.y && $util.isInteger(message.y.low) && $util.isInteger(message.y.high)))
                        return "y: integer|Long expected";
                return null;
            };

            /**
             * Creates a Point message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Point
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Point} Point
             */
            Point.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Point)
                    return object;
                var message = new $root.layout21.raw.Point();
                if (object.x != null)
                    if ($util.Long)
                        (message.x = $util.Long.fromValue(object.x)).unsigned = false;
                    else if (typeof object.x === "string")
                        message.x = parseInt(object.x, 10);
                    else if (typeof object.x === "number")
                        message.x = object.x;
                    else if (typeof object.x === "object")
                        message.x = new $util.LongBits(object.x.low >>> 0, object.x.high >>> 0).toNumber();
                if (object.y != null)
                    if ($util.Long)
                        (message.y = $util.Long.fromValue(object.y)).unsigned = false;
                    else if (typeof object.y === "string")
                        message.y = parseInt(object.y, 10);
                    else if (typeof object.y === "number")
                        message.y = object.y;
                    else if (typeof object.y === "object")
                        message.y = new $util.LongBits(object.y.low >>> 0, object.y.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Point message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Point
             * @static
             * @param {layout21.raw.Point} message Point
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Point.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.x = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.x = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.y = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.y = options.longs === String ? "0" : 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x === "number")
                        object.x = options.longs === String ? String(message.x) : message.x;
                    else
                        object.x = options.longs === String ? $util.Long.prototype.toString.call(message.x) : options.longs === Number ? new $util.LongBits(message.x.low >>> 0, message.x.high >>> 0).toNumber() : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y === "number")
                        object.y = options.longs === String ? String(message.y) : message.y;
                    else
                        object.y = options.longs === String ? $util.Long.prototype.toString.call(message.y) : options.longs === Number ? new $util.LongBits(message.y.low >>> 0, message.y.high >>> 0).toNumber() : message.y;
                return object;
            };

            /**
             * Converts this Point to JSON.
             * @function toJSON
             * @memberof layout21.raw.Point
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Point.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Point;
        })();

        raw.Layer = (function() {

            /**
             * Properties of a Layer.
             * @memberof layout21.raw
             * @interface ILayer
             * @property {number|Long|null} [number] Layer number
             * @property {number|Long|null} [purpose] Layer purpose
             */

            /**
             * Constructs a new Layer.
             * @memberof layout21.raw
             * @classdesc Represents a Layer.
             * @implements ILayer
             * @constructor
             * @param {layout21.raw.ILayer=} [properties] Properties to set
             */
            function Layer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Layer number.
             * @member {number|Long} number
             * @memberof layout21.raw.Layer
             * @instance
             */
            Layer.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Layer purpose.
             * @member {number|Long} purpose
             * @memberof layout21.raw.Layer
             * @instance
             */
            Layer.prototype.purpose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Layer instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Layer
             * @static
             * @param {layout21.raw.ILayer=} [properties] Properties to set
             * @returns {layout21.raw.Layer} Layer instance
             */
            Layer.create = function create(properties) {
                return new Layer(properties);
            };

            /**
             * Encodes the specified Layer message. Does not implicitly {@link layout21.raw.Layer.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Layer
             * @static
             * @param {layout21.raw.ILayer} message Layer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Layer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.number);
                if (message.purpose != null && Object.hasOwnProperty.call(message, "purpose"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.purpose);
                return writer;
            };

            /**
             * Encodes the specified Layer message, length delimited. Does not implicitly {@link layout21.raw.Layer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Layer
             * @static
             * @param {layout21.raw.ILayer} message Layer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Layer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Layer message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Layer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Layer} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Layer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Layer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.int64();
                        break;
                    case 2:
                        message.purpose = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Layer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Layer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Layer} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Layer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Layer message.
             * @function verify
             * @memberof layout21.raw.Layer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Layer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                        return "number: integer|Long expected";
                if (message.purpose != null && message.hasOwnProperty("purpose"))
                    if (!$util.isInteger(message.purpose) && !(message.purpose && $util.isInteger(message.purpose.low) && $util.isInteger(message.purpose.high)))
                        return "purpose: integer|Long expected";
                return null;
            };

            /**
             * Creates a Layer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Layer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Layer} Layer
             */
            Layer.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Layer)
                    return object;
                var message = new $root.layout21.raw.Layer();
                if (object.number != null)
                    if ($util.Long)
                        (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                    else if (typeof object.number === "string")
                        message.number = parseInt(object.number, 10);
                    else if (typeof object.number === "number")
                        message.number = object.number;
                    else if (typeof object.number === "object")
                        message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
                if (object.purpose != null)
                    if ($util.Long)
                        (message.purpose = $util.Long.fromValue(object.purpose)).unsigned = false;
                    else if (typeof object.purpose === "string")
                        message.purpose = parseInt(object.purpose, 10);
                    else if (typeof object.purpose === "number")
                        message.purpose = object.purpose;
                    else if (typeof object.purpose === "object")
                        message.purpose = new $util.LongBits(object.purpose.low >>> 0, object.purpose.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Layer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Layer
             * @static
             * @param {layout21.raw.Layer} message Layer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Layer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.number = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.purpose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.purpose = options.longs === String ? "0" : 0;
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    if (typeof message.number === "number")
                        object.number = options.longs === String ? String(message.number) : message.number;
                    else
                        object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
                if (message.purpose != null && message.hasOwnProperty("purpose"))
                    if (typeof message.purpose === "number")
                        object.purpose = options.longs === String ? String(message.purpose) : message.purpose;
                    else
                        object.purpose = options.longs === String ? $util.Long.prototype.toString.call(message.purpose) : options.longs === Number ? new $util.LongBits(message.purpose.low >>> 0, message.purpose.high >>> 0).toNumber() : message.purpose;
                return object;
            };

            /**
             * Converts this Layer to JSON.
             * @function toJSON
             * @memberof layout21.raw.Layer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Layer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Layer;
        })();

        raw.QualifiedName = (function() {

            /**
             * Properties of a QualifiedName.
             * @memberof layout21.raw
             * @interface IQualifiedName
             * @property {string|null} [domain] QualifiedName domain
             * @property {string|null} [name] QualifiedName name
             */

            /**
             * Constructs a new QualifiedName.
             * @memberof layout21.raw
             * @classdesc Represents a QualifiedName.
             * @implements IQualifiedName
             * @constructor
             * @param {layout21.raw.IQualifiedName=} [properties] Properties to set
             */
            function QualifiedName(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QualifiedName domain.
             * @member {string} domain
             * @memberof layout21.raw.QualifiedName
             * @instance
             */
            QualifiedName.prototype.domain = "";

            /**
             * QualifiedName name.
             * @member {string} name
             * @memberof layout21.raw.QualifiedName
             * @instance
             */
            QualifiedName.prototype.name = "";

            /**
             * Creates a new QualifiedName instance using the specified properties.
             * @function create
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {layout21.raw.IQualifiedName=} [properties] Properties to set
             * @returns {layout21.raw.QualifiedName} QualifiedName instance
             */
            QualifiedName.create = function create(properties) {
                return new QualifiedName(properties);
            };

            /**
             * Encodes the specified QualifiedName message. Does not implicitly {@link layout21.raw.QualifiedName.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {layout21.raw.IQualifiedName} message QualifiedName message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QualifiedName.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.domain);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified QualifiedName message, length delimited. Does not implicitly {@link layout21.raw.QualifiedName.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {layout21.raw.IQualifiedName} message QualifiedName message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QualifiedName.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QualifiedName message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.QualifiedName} QualifiedName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QualifiedName.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.QualifiedName();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.domain = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QualifiedName message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.QualifiedName} QualifiedName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QualifiedName.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QualifiedName message.
             * @function verify
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QualifiedName.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.domain != null && message.hasOwnProperty("domain"))
                    if (!$util.isString(message.domain))
                        return "domain: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a QualifiedName message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.QualifiedName} QualifiedName
             */
            QualifiedName.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.QualifiedName)
                    return object;
                var message = new $root.layout21.raw.QualifiedName();
                if (object.domain != null)
                    message.domain = String(object.domain);
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a QualifiedName message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.QualifiedName
             * @static
             * @param {layout21.raw.QualifiedName} message QualifiedName
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QualifiedName.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.domain = "";
                    object.name = "";
                }
                if (message.domain != null && message.hasOwnProperty("domain"))
                    object.domain = message.domain;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this QualifiedName to JSON.
             * @function toJSON
             * @memberof layout21.raw.QualifiedName
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QualifiedName.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QualifiedName;
        })();

        raw.Rectangle = (function() {

            /**
             * Properties of a Rectangle.
             * @memberof layout21.raw
             * @interface IRectangle
             * @property {string|null} [net] Rectangle net
             * @property {layout21.raw.IPoint|null} [lowerLeft] Rectangle lowerLeft
             * @property {number|Long|null} [width] Rectangle width
             * @property {number|Long|null} [height] Rectangle height
             */

            /**
             * Constructs a new Rectangle.
             * @memberof layout21.raw
             * @classdesc Represents a Rectangle.
             * @implements IRectangle
             * @constructor
             * @param {layout21.raw.IRectangle=} [properties] Properties to set
             */
            function Rectangle(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Rectangle net.
             * @member {string} net
             * @memberof layout21.raw.Rectangle
             * @instance
             */
            Rectangle.prototype.net = "";

            /**
             * Rectangle lowerLeft.
             * @member {layout21.raw.IPoint|null|undefined} lowerLeft
             * @memberof layout21.raw.Rectangle
             * @instance
             */
            Rectangle.prototype.lowerLeft = null;

            /**
             * Rectangle width.
             * @member {number|Long} width
             * @memberof layout21.raw.Rectangle
             * @instance
             */
            Rectangle.prototype.width = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Rectangle height.
             * @member {number|Long} height
             * @memberof layout21.raw.Rectangle
             * @instance
             */
            Rectangle.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Rectangle instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {layout21.raw.IRectangle=} [properties] Properties to set
             * @returns {layout21.raw.Rectangle} Rectangle instance
             */
            Rectangle.create = function create(properties) {
                return new Rectangle(properties);
            };

            /**
             * Encodes the specified Rectangle message. Does not implicitly {@link layout21.raw.Rectangle.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {layout21.raw.IRectangle} message Rectangle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rectangle.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.net != null && Object.hasOwnProperty.call(message, "net"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.net);
                if (message.lowerLeft != null && Object.hasOwnProperty.call(message, "lowerLeft"))
                    $root.layout21.raw.Point.encode(message.lowerLeft, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.width);
                if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.height);
                return writer;
            };

            /**
             * Encodes the specified Rectangle message, length delimited. Does not implicitly {@link layout21.raw.Rectangle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {layout21.raw.IRectangle} message Rectangle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rectangle.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Rectangle message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Rectangle} Rectangle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rectangle.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Rectangle();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.net = reader.string();
                        break;
                    case 2:
                        message.lowerLeft = $root.layout21.raw.Point.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.width = reader.int64();
                        break;
                    case 4:
                        message.height = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Rectangle message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Rectangle} Rectangle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rectangle.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Rectangle message.
             * @function verify
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Rectangle.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.net != null && message.hasOwnProperty("net"))
                    if (!$util.isString(message.net))
                        return "net: string expected";
                if (message.lowerLeft != null && message.hasOwnProperty("lowerLeft")) {
                    var error = $root.layout21.raw.Point.verify(message.lowerLeft);
                    if (error)
                        return "lowerLeft." + error;
                }
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width) && !(message.width && $util.isInteger(message.width.low) && $util.isInteger(message.width.high)))
                        return "width: integer|Long expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                return null;
            };

            /**
             * Creates a Rectangle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Rectangle} Rectangle
             */
            Rectangle.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Rectangle)
                    return object;
                var message = new $root.layout21.raw.Rectangle();
                if (object.net != null)
                    message.net = String(object.net);
                if (object.lowerLeft != null) {
                    if (typeof object.lowerLeft !== "object")
                        throw TypeError(".layout21.raw.Rectangle.lowerLeft: object expected");
                    message.lowerLeft = $root.layout21.raw.Point.fromObject(object.lowerLeft);
                }
                if (object.width != null)
                    if ($util.Long)
                        (message.width = $util.Long.fromValue(object.width)).unsigned = false;
                    else if (typeof object.width === "string")
                        message.width = parseInt(object.width, 10);
                    else if (typeof object.width === "number")
                        message.width = object.width;
                    else if (typeof object.width === "object")
                        message.width = new $util.LongBits(object.width.low >>> 0, object.width.high >>> 0).toNumber();
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = false;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Rectangle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Rectangle
             * @static
             * @param {layout21.raw.Rectangle} message Rectangle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Rectangle.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.net = "";
                    object.lowerLeft = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.width = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.width = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                }
                if (message.net != null && message.hasOwnProperty("net"))
                    object.net = message.net;
                if (message.lowerLeft != null && message.hasOwnProperty("lowerLeft"))
                    object.lowerLeft = $root.layout21.raw.Point.toObject(message.lowerLeft, options);
                if (message.width != null && message.hasOwnProperty("width"))
                    if (typeof message.width === "number")
                        object.width = options.longs === String ? String(message.width) : message.width;
                    else
                        object.width = options.longs === String ? $util.Long.prototype.toString.call(message.width) : options.longs === Number ? new $util.LongBits(message.width.low >>> 0, message.width.high >>> 0).toNumber() : message.width;
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                return object;
            };

            /**
             * Converts this Rectangle to JSON.
             * @function toJSON
             * @memberof layout21.raw.Rectangle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Rectangle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Rectangle;
        })();

        raw.Polygon = (function() {

            /**
             * Properties of a Polygon.
             * @memberof layout21.raw
             * @interface IPolygon
             * @property {string|null} [net] Polygon net
             * @property {Array.<layout21.raw.IPoint>|null} [vertices] Polygon vertices
             */

            /**
             * Constructs a new Polygon.
             * @memberof layout21.raw
             * @classdesc Represents a Polygon.
             * @implements IPolygon
             * @constructor
             * @param {layout21.raw.IPolygon=} [properties] Properties to set
             */
            function Polygon(properties) {
                this.vertices = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Polygon net.
             * @member {string} net
             * @memberof layout21.raw.Polygon
             * @instance
             */
            Polygon.prototype.net = "";

            /**
             * Polygon vertices.
             * @member {Array.<layout21.raw.IPoint>} vertices
             * @memberof layout21.raw.Polygon
             * @instance
             */
            Polygon.prototype.vertices = $util.emptyArray;

            /**
             * Creates a new Polygon instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Polygon
             * @static
             * @param {layout21.raw.IPolygon=} [properties] Properties to set
             * @returns {layout21.raw.Polygon} Polygon instance
             */
            Polygon.create = function create(properties) {
                return new Polygon(properties);
            };

            /**
             * Encodes the specified Polygon message. Does not implicitly {@link layout21.raw.Polygon.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Polygon
             * @static
             * @param {layout21.raw.IPolygon} message Polygon message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Polygon.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.net != null && Object.hasOwnProperty.call(message, "net"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.net);
                if (message.vertices != null && message.vertices.length)
                    for (var i = 0; i < message.vertices.length; ++i)
                        $root.layout21.raw.Point.encode(message.vertices[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Polygon message, length delimited. Does not implicitly {@link layout21.raw.Polygon.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Polygon
             * @static
             * @param {layout21.raw.IPolygon} message Polygon message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Polygon.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Polygon message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Polygon
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Polygon} Polygon
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Polygon.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Polygon();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.net = reader.string();
                        break;
                    case 2:
                        if (!(message.vertices && message.vertices.length))
                            message.vertices = [];
                        message.vertices.push($root.layout21.raw.Point.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Polygon message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Polygon
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Polygon} Polygon
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Polygon.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Polygon message.
             * @function verify
             * @memberof layout21.raw.Polygon
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Polygon.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.net != null && message.hasOwnProperty("net"))
                    if (!$util.isString(message.net))
                        return "net: string expected";
                if (message.vertices != null && message.hasOwnProperty("vertices")) {
                    if (!Array.isArray(message.vertices))
                        return "vertices: array expected";
                    for (var i = 0; i < message.vertices.length; ++i) {
                        var error = $root.layout21.raw.Point.verify(message.vertices[i]);
                        if (error)
                            return "vertices." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Polygon message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Polygon
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Polygon} Polygon
             */
            Polygon.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Polygon)
                    return object;
                var message = new $root.layout21.raw.Polygon();
                if (object.net != null)
                    message.net = String(object.net);
                if (object.vertices) {
                    if (!Array.isArray(object.vertices))
                        throw TypeError(".layout21.raw.Polygon.vertices: array expected");
                    message.vertices = [];
                    for (var i = 0; i < object.vertices.length; ++i) {
                        if (typeof object.vertices[i] !== "object")
                            throw TypeError(".layout21.raw.Polygon.vertices: object expected");
                        message.vertices[i] = $root.layout21.raw.Point.fromObject(object.vertices[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Polygon message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Polygon
             * @static
             * @param {layout21.raw.Polygon} message Polygon
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Polygon.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.vertices = [];
                if (options.defaults)
                    object.net = "";
                if (message.net != null && message.hasOwnProperty("net"))
                    object.net = message.net;
                if (message.vertices && message.vertices.length) {
                    object.vertices = [];
                    for (var j = 0; j < message.vertices.length; ++j)
                        object.vertices[j] = $root.layout21.raw.Point.toObject(message.vertices[j], options);
                }
                return object;
            };

            /**
             * Converts this Polygon to JSON.
             * @function toJSON
             * @memberof layout21.raw.Polygon
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Polygon.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Polygon;
        })();

        raw.Path = (function() {

            /**
             * Properties of a Path.
             * @memberof layout21.raw
             * @interface IPath
             * @property {string|null} [net] Path net
             * @property {Array.<layout21.raw.IPoint>|null} [points] Path points
             * @property {number|Long|null} [width] Path width
             */

            /**
             * Constructs a new Path.
             * @memberof layout21.raw
             * @classdesc Represents a Path.
             * @implements IPath
             * @constructor
             * @param {layout21.raw.IPath=} [properties] Properties to set
             */
            function Path(properties) {
                this.points = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Path net.
             * @member {string} net
             * @memberof layout21.raw.Path
             * @instance
             */
            Path.prototype.net = "";

            /**
             * Path points.
             * @member {Array.<layout21.raw.IPoint>} points
             * @memberof layout21.raw.Path
             * @instance
             */
            Path.prototype.points = $util.emptyArray;

            /**
             * Path width.
             * @member {number|Long} width
             * @memberof layout21.raw.Path
             * @instance
             */
            Path.prototype.width = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Path instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Path
             * @static
             * @param {layout21.raw.IPath=} [properties] Properties to set
             * @returns {layout21.raw.Path} Path instance
             */
            Path.create = function create(properties) {
                return new Path(properties);
            };

            /**
             * Encodes the specified Path message. Does not implicitly {@link layout21.raw.Path.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Path
             * @static
             * @param {layout21.raw.IPath} message Path message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Path.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.net != null && Object.hasOwnProperty.call(message, "net"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.net);
                if (message.points != null && message.points.length)
                    for (var i = 0; i < message.points.length; ++i)
                        $root.layout21.raw.Point.encode(message.points[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.width);
                return writer;
            };

            /**
             * Encodes the specified Path message, length delimited. Does not implicitly {@link layout21.raw.Path.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Path
             * @static
             * @param {layout21.raw.IPath} message Path message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Path.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Path message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Path
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Path} Path
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Path.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Path();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.net = reader.string();
                        break;
                    case 2:
                        if (!(message.points && message.points.length))
                            message.points = [];
                        message.points.push($root.layout21.raw.Point.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.width = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Path message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Path
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Path} Path
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Path.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Path message.
             * @function verify
             * @memberof layout21.raw.Path
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Path.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.net != null && message.hasOwnProperty("net"))
                    if (!$util.isString(message.net))
                        return "net: string expected";
                if (message.points != null && message.hasOwnProperty("points")) {
                    if (!Array.isArray(message.points))
                        return "points: array expected";
                    for (var i = 0; i < message.points.length; ++i) {
                        var error = $root.layout21.raw.Point.verify(message.points[i]);
                        if (error)
                            return "points." + error;
                    }
                }
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width) && !(message.width && $util.isInteger(message.width.low) && $util.isInteger(message.width.high)))
                        return "width: integer|Long expected";
                return null;
            };

            /**
             * Creates a Path message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Path
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Path} Path
             */
            Path.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Path)
                    return object;
                var message = new $root.layout21.raw.Path();
                if (object.net != null)
                    message.net = String(object.net);
                if (object.points) {
                    if (!Array.isArray(object.points))
                        throw TypeError(".layout21.raw.Path.points: array expected");
                    message.points = [];
                    for (var i = 0; i < object.points.length; ++i) {
                        if (typeof object.points[i] !== "object")
                            throw TypeError(".layout21.raw.Path.points: object expected");
                        message.points[i] = $root.layout21.raw.Point.fromObject(object.points[i]);
                    }
                }
                if (object.width != null)
                    if ($util.Long)
                        (message.width = $util.Long.fromValue(object.width)).unsigned = false;
                    else if (typeof object.width === "string")
                        message.width = parseInt(object.width, 10);
                    else if (typeof object.width === "number")
                        message.width = object.width;
                    else if (typeof object.width === "object")
                        message.width = new $util.LongBits(object.width.low >>> 0, object.width.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Path message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Path
             * @static
             * @param {layout21.raw.Path} message Path
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Path.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.points = [];
                if (options.defaults) {
                    object.net = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.width = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.width = options.longs === String ? "0" : 0;
                }
                if (message.net != null && message.hasOwnProperty("net"))
                    object.net = message.net;
                if (message.points && message.points.length) {
                    object.points = [];
                    for (var j = 0; j < message.points.length; ++j)
                        object.points[j] = $root.layout21.raw.Point.toObject(message.points[j], options);
                }
                if (message.width != null && message.hasOwnProperty("width"))
                    if (typeof message.width === "number")
                        object.width = options.longs === String ? String(message.width) : message.width;
                    else
                        object.width = options.longs === String ? $util.Long.prototype.toString.call(message.width) : options.longs === Number ? new $util.LongBits(message.width.low >>> 0, message.width.high >>> 0).toNumber() : message.width;
                return object;
            };

            /**
             * Converts this Path to JSON.
             * @function toJSON
             * @memberof layout21.raw.Path
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Path.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Path;
        })();

        raw.LayerShapes = (function() {

            /**
             * Properties of a LayerShapes.
             * @memberof layout21.raw
             * @interface ILayerShapes
             * @property {layout21.raw.ILayer|null} [layer] LayerShapes layer
             * @property {Array.<layout21.raw.IRectangle>|null} [rectangles] LayerShapes rectangles
             * @property {Array.<layout21.raw.IPolygon>|null} [polygons] LayerShapes polygons
             * @property {Array.<layout21.raw.IPath>|null} [paths] LayerShapes paths
             */

            /**
             * Constructs a new LayerShapes.
             * @memberof layout21.raw
             * @classdesc Represents a LayerShapes.
             * @implements ILayerShapes
             * @constructor
             * @param {layout21.raw.ILayerShapes=} [properties] Properties to set
             */
            function LayerShapes(properties) {
                this.rectangles = [];
                this.polygons = [];
                this.paths = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LayerShapes layer.
             * @member {layout21.raw.ILayer|null|undefined} layer
             * @memberof layout21.raw.LayerShapes
             * @instance
             */
            LayerShapes.prototype.layer = null;

            /**
             * LayerShapes rectangles.
             * @member {Array.<layout21.raw.IRectangle>} rectangles
             * @memberof layout21.raw.LayerShapes
             * @instance
             */
            LayerShapes.prototype.rectangles = $util.emptyArray;

            /**
             * LayerShapes polygons.
             * @member {Array.<layout21.raw.IPolygon>} polygons
             * @memberof layout21.raw.LayerShapes
             * @instance
             */
            LayerShapes.prototype.polygons = $util.emptyArray;

            /**
             * LayerShapes paths.
             * @member {Array.<layout21.raw.IPath>} paths
             * @memberof layout21.raw.LayerShapes
             * @instance
             */
            LayerShapes.prototype.paths = $util.emptyArray;

            /**
             * Creates a new LayerShapes instance using the specified properties.
             * @function create
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {layout21.raw.ILayerShapes=} [properties] Properties to set
             * @returns {layout21.raw.LayerShapes} LayerShapes instance
             */
            LayerShapes.create = function create(properties) {
                return new LayerShapes(properties);
            };

            /**
             * Encodes the specified LayerShapes message. Does not implicitly {@link layout21.raw.LayerShapes.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {layout21.raw.ILayerShapes} message LayerShapes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayerShapes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.layer != null && Object.hasOwnProperty.call(message, "layer"))
                    $root.layout21.raw.Layer.encode(message.layer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.rectangles != null && message.rectangles.length)
                    for (var i = 0; i < message.rectangles.length; ++i)
                        $root.layout21.raw.Rectangle.encode(message.rectangles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.polygons != null && message.polygons.length)
                    for (var i = 0; i < message.polygons.length; ++i)
                        $root.layout21.raw.Polygon.encode(message.polygons[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.paths != null && message.paths.length)
                    for (var i = 0; i < message.paths.length; ++i)
                        $root.layout21.raw.Path.encode(message.paths[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LayerShapes message, length delimited. Does not implicitly {@link layout21.raw.LayerShapes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {layout21.raw.ILayerShapes} message LayerShapes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayerShapes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LayerShapes message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.LayerShapes} LayerShapes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayerShapes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.LayerShapes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.layer = $root.layout21.raw.Layer.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.rectangles && message.rectangles.length))
                            message.rectangles = [];
                        message.rectangles.push($root.layout21.raw.Rectangle.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.polygons && message.polygons.length))
                            message.polygons = [];
                        message.polygons.push($root.layout21.raw.Polygon.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.paths && message.paths.length))
                            message.paths = [];
                        message.paths.push($root.layout21.raw.Path.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LayerShapes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.LayerShapes} LayerShapes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayerShapes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LayerShapes message.
             * @function verify
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LayerShapes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.layer != null && message.hasOwnProperty("layer")) {
                    var error = $root.layout21.raw.Layer.verify(message.layer);
                    if (error)
                        return "layer." + error;
                }
                if (message.rectangles != null && message.hasOwnProperty("rectangles")) {
                    if (!Array.isArray(message.rectangles))
                        return "rectangles: array expected";
                    for (var i = 0; i < message.rectangles.length; ++i) {
                        var error = $root.layout21.raw.Rectangle.verify(message.rectangles[i]);
                        if (error)
                            return "rectangles." + error;
                    }
                }
                if (message.polygons != null && message.hasOwnProperty("polygons")) {
                    if (!Array.isArray(message.polygons))
                        return "polygons: array expected";
                    for (var i = 0; i < message.polygons.length; ++i) {
                        var error = $root.layout21.raw.Polygon.verify(message.polygons[i]);
                        if (error)
                            return "polygons." + error;
                    }
                }
                if (message.paths != null && message.hasOwnProperty("paths")) {
                    if (!Array.isArray(message.paths))
                        return "paths: array expected";
                    for (var i = 0; i < message.paths.length; ++i) {
                        var error = $root.layout21.raw.Path.verify(message.paths[i]);
                        if (error)
                            return "paths." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a LayerShapes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.LayerShapes} LayerShapes
             */
            LayerShapes.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.LayerShapes)
                    return object;
                var message = new $root.layout21.raw.LayerShapes();
                if (object.layer != null) {
                    if (typeof object.layer !== "object")
                        throw TypeError(".layout21.raw.LayerShapes.layer: object expected");
                    message.layer = $root.layout21.raw.Layer.fromObject(object.layer);
                }
                if (object.rectangles) {
                    if (!Array.isArray(object.rectangles))
                        throw TypeError(".layout21.raw.LayerShapes.rectangles: array expected");
                    message.rectangles = [];
                    for (var i = 0; i < object.rectangles.length; ++i) {
                        if (typeof object.rectangles[i] !== "object")
                            throw TypeError(".layout21.raw.LayerShapes.rectangles: object expected");
                        message.rectangles[i] = $root.layout21.raw.Rectangle.fromObject(object.rectangles[i]);
                    }
                }
                if (object.polygons) {
                    if (!Array.isArray(object.polygons))
                        throw TypeError(".layout21.raw.LayerShapes.polygons: array expected");
                    message.polygons = [];
                    for (var i = 0; i < object.polygons.length; ++i) {
                        if (typeof object.polygons[i] !== "object")
                            throw TypeError(".layout21.raw.LayerShapes.polygons: object expected");
                        message.polygons[i] = $root.layout21.raw.Polygon.fromObject(object.polygons[i]);
                    }
                }
                if (object.paths) {
                    if (!Array.isArray(object.paths))
                        throw TypeError(".layout21.raw.LayerShapes.paths: array expected");
                    message.paths = [];
                    for (var i = 0; i < object.paths.length; ++i) {
                        if (typeof object.paths[i] !== "object")
                            throw TypeError(".layout21.raw.LayerShapes.paths: object expected");
                        message.paths[i] = $root.layout21.raw.Path.fromObject(object.paths[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a LayerShapes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.LayerShapes
             * @static
             * @param {layout21.raw.LayerShapes} message LayerShapes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LayerShapes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.rectangles = [];
                    object.polygons = [];
                    object.paths = [];
                }
                if (options.defaults)
                    object.layer = null;
                if (message.layer != null && message.hasOwnProperty("layer"))
                    object.layer = $root.layout21.raw.Layer.toObject(message.layer, options);
                if (message.rectangles && message.rectangles.length) {
                    object.rectangles = [];
                    for (var j = 0; j < message.rectangles.length; ++j)
                        object.rectangles[j] = $root.layout21.raw.Rectangle.toObject(message.rectangles[j], options);
                }
                if (message.polygons && message.polygons.length) {
                    object.polygons = [];
                    for (var j = 0; j < message.polygons.length; ++j)
                        object.polygons[j] = $root.layout21.raw.Polygon.toObject(message.polygons[j], options);
                }
                if (message.paths && message.paths.length) {
                    object.paths = [];
                    for (var j = 0; j < message.paths.length; ++j)
                        object.paths[j] = $root.layout21.raw.Path.toObject(message.paths[j], options);
                }
                return object;
            };

            /**
             * Converts this LayerShapes to JSON.
             * @function toJSON
             * @memberof layout21.raw.LayerShapes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LayerShapes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LayerShapes;
        })();

        raw.TextElement = (function() {

            /**
             * Properties of a TextElement.
             * @memberof layout21.raw
             * @interface ITextElement
             * @property {string|null} [string] TextElement string
             * @property {layout21.raw.IPoint|null} [loc] TextElement loc
             */

            /**
             * Constructs a new TextElement.
             * @memberof layout21.raw
             * @classdesc Represents a TextElement.
             * @implements ITextElement
             * @constructor
             * @param {layout21.raw.ITextElement=} [properties] Properties to set
             */
            function TextElement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TextElement string.
             * @member {string} string
             * @memberof layout21.raw.TextElement
             * @instance
             */
            TextElement.prototype.string = "";

            /**
             * TextElement loc.
             * @member {layout21.raw.IPoint|null|undefined} loc
             * @memberof layout21.raw.TextElement
             * @instance
             */
            TextElement.prototype.loc = null;

            /**
             * Creates a new TextElement instance using the specified properties.
             * @function create
             * @memberof layout21.raw.TextElement
             * @static
             * @param {layout21.raw.ITextElement=} [properties] Properties to set
             * @returns {layout21.raw.TextElement} TextElement instance
             */
            TextElement.create = function create(properties) {
                return new TextElement(properties);
            };

            /**
             * Encodes the specified TextElement message. Does not implicitly {@link layout21.raw.TextElement.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.TextElement
             * @static
             * @param {layout21.raw.ITextElement} message TextElement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextElement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.string);
                if (message.loc != null && Object.hasOwnProperty.call(message, "loc"))
                    $root.layout21.raw.Point.encode(message.loc, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TextElement message, length delimited. Does not implicitly {@link layout21.raw.TextElement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.TextElement
             * @static
             * @param {layout21.raw.ITextElement} message TextElement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextElement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TextElement message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.TextElement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.TextElement} TextElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextElement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.TextElement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.string = reader.string();
                        break;
                    case 2:
                        message.loc = $root.layout21.raw.Point.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TextElement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.TextElement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.TextElement} TextElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextElement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TextElement message.
             * @function verify
             * @memberof layout21.raw.TextElement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TextElement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.string != null && message.hasOwnProperty("string"))
                    if (!$util.isString(message.string))
                        return "string: string expected";
                if (message.loc != null && message.hasOwnProperty("loc")) {
                    var error = $root.layout21.raw.Point.verify(message.loc);
                    if (error)
                        return "loc." + error;
                }
                return null;
            };

            /**
             * Creates a TextElement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.TextElement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.TextElement} TextElement
             */
            TextElement.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.TextElement)
                    return object;
                var message = new $root.layout21.raw.TextElement();
                if (object.string != null)
                    message.string = String(object.string);
                if (object.loc != null) {
                    if (typeof object.loc !== "object")
                        throw TypeError(".layout21.raw.TextElement.loc: object expected");
                    message.loc = $root.layout21.raw.Point.fromObject(object.loc);
                }
                return message;
            };

            /**
             * Creates a plain object from a TextElement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.TextElement
             * @static
             * @param {layout21.raw.TextElement} message TextElement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TextElement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.string = "";
                    object.loc = null;
                }
                if (message.string != null && message.hasOwnProperty("string"))
                    object.string = message.string;
                if (message.loc != null && message.hasOwnProperty("loc"))
                    object.loc = $root.layout21.raw.Point.toObject(message.loc, options);
                return object;
            };

            /**
             * Converts this TextElement to JSON.
             * @function toJSON
             * @memberof layout21.raw.TextElement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TextElement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TextElement;
        })();

        raw.Cell = (function() {

            /**
             * Properties of a Cell.
             * @memberof layout21.raw
             * @interface ICell
             * @property {layout21.raw.IQualifiedName|null} [name] Cell name
             * @property {Array.<layout21.raw.ILayerShapes>|null} [shapes] Cell shapes
             * @property {Array.<layout21.raw.IInstance>|null} [instances] Cell instances
             * @property {Array.<layout21.raw.ITextElement>|null} [annotations] Cell annotations
             * @property {string|null} [author] Cell author
             * @property {string|null} [copyright] Cell copyright
             */

            /**
             * Constructs a new Cell.
             * @memberof layout21.raw
             * @classdesc Represents a Cell.
             * @implements ICell
             * @constructor
             * @param {layout21.raw.ICell=} [properties] Properties to set
             */
            function Cell(properties) {
                this.shapes = [];
                this.instances = [];
                this.annotations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Cell name.
             * @member {layout21.raw.IQualifiedName|null|undefined} name
             * @memberof layout21.raw.Cell
             * @instance
             */
            Cell.prototype.name = null;

            /**
             * Cell shapes.
             * @member {Array.<layout21.raw.ILayerShapes>} shapes
             * @memberof layout21.raw.Cell
             * @instance
             */
            Cell.prototype.shapes = $util.emptyArray;

            /**
             * Cell instances.
             * @member {Array.<layout21.raw.IInstance>} instances
             * @memberof layout21.raw.Cell
             * @instance
             */
            Cell.prototype.instances = $util.emptyArray;

            /**
             * Cell annotations.
             * @member {Array.<layout21.raw.ITextElement>} annotations
             * @memberof layout21.raw.Cell
             * @instance
             */
            Cell.prototype.annotations = $util.emptyArray;

            /**
             * Cell author.
             * @member {string} author
             * @memberof layout21.raw.Cell
             * @instance
             */
            Cell.prototype.author = "";

            /**
             * Cell copyright.
             * @member {string} copyright
             * @memberof layout21.raw.Cell
             * @instance
             */
            Cell.prototype.copyright = "";

            /**
             * Creates a new Cell instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Cell
             * @static
             * @param {layout21.raw.ICell=} [properties] Properties to set
             * @returns {layout21.raw.Cell} Cell instance
             */
            Cell.create = function create(properties) {
                return new Cell(properties);
            };

            /**
             * Encodes the specified Cell message. Does not implicitly {@link layout21.raw.Cell.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Cell
             * @static
             * @param {layout21.raw.ICell} message Cell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cell.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    $root.layout21.raw.QualifiedName.encode(message.name, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.shapes != null && message.shapes.length)
                    for (var i = 0; i < message.shapes.length; ++i)
                        $root.layout21.raw.LayerShapes.encode(message.shapes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.instances != null && message.instances.length)
                    for (var i = 0; i < message.instances.length; ++i)
                        $root.layout21.raw.Instance.encode(message.instances[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.annotations != null && message.annotations.length)
                    for (var i = 0; i < message.annotations.length; ++i)
                        $root.layout21.raw.TextElement.encode(message.annotations[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                    writer.uint32(/* id 100, wireType 2 =*/802).string(message.author);
                if (message.copyright != null && Object.hasOwnProperty.call(message, "copyright"))
                    writer.uint32(/* id 101, wireType 2 =*/810).string(message.copyright);
                return writer;
            };

            /**
             * Encodes the specified Cell message, length delimited. Does not implicitly {@link layout21.raw.Cell.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Cell
             * @static
             * @param {layout21.raw.ICell} message Cell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cell.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Cell message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Cell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Cell} Cell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cell.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Cell();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = $root.layout21.raw.QualifiedName.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.shapes && message.shapes.length))
                            message.shapes = [];
                        message.shapes.push($root.layout21.raw.LayerShapes.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.instances && message.instances.length))
                            message.instances = [];
                        message.instances.push($root.layout21.raw.Instance.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.annotations && message.annotations.length))
                            message.annotations = [];
                        message.annotations.push($root.layout21.raw.TextElement.decode(reader, reader.uint32()));
                        break;
                    case 100:
                        message.author = reader.string();
                        break;
                    case 101:
                        message.copyright = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Cell message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Cell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Cell} Cell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cell.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Cell message.
             * @function verify
             * @memberof layout21.raw.Cell
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Cell.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    var error = $root.layout21.raw.QualifiedName.verify(message.name);
                    if (error)
                        return "name." + error;
                }
                if (message.shapes != null && message.hasOwnProperty("shapes")) {
                    if (!Array.isArray(message.shapes))
                        return "shapes: array expected";
                    for (var i = 0; i < message.shapes.length; ++i) {
                        var error = $root.layout21.raw.LayerShapes.verify(message.shapes[i]);
                        if (error)
                            return "shapes." + error;
                    }
                }
                if (message.instances != null && message.hasOwnProperty("instances")) {
                    if (!Array.isArray(message.instances))
                        return "instances: array expected";
                    for (var i = 0; i < message.instances.length; ++i) {
                        var error = $root.layout21.raw.Instance.verify(message.instances[i]);
                        if (error)
                            return "instances." + error;
                    }
                }
                if (message.annotations != null && message.hasOwnProperty("annotations")) {
                    if (!Array.isArray(message.annotations))
                        return "annotations: array expected";
                    for (var i = 0; i < message.annotations.length; ++i) {
                        var error = $root.layout21.raw.TextElement.verify(message.annotations[i]);
                        if (error)
                            return "annotations." + error;
                    }
                }
                if (message.author != null && message.hasOwnProperty("author"))
                    if (!$util.isString(message.author))
                        return "author: string expected";
                if (message.copyright != null && message.hasOwnProperty("copyright"))
                    if (!$util.isString(message.copyright))
                        return "copyright: string expected";
                return null;
            };

            /**
             * Creates a Cell message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Cell
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Cell} Cell
             */
            Cell.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Cell)
                    return object;
                var message = new $root.layout21.raw.Cell();
                if (object.name != null) {
                    if (typeof object.name !== "object")
                        throw TypeError(".layout21.raw.Cell.name: object expected");
                    message.name = $root.layout21.raw.QualifiedName.fromObject(object.name);
                }
                if (object.shapes) {
                    if (!Array.isArray(object.shapes))
                        throw TypeError(".layout21.raw.Cell.shapes: array expected");
                    message.shapes = [];
                    for (var i = 0; i < object.shapes.length; ++i) {
                        if (typeof object.shapes[i] !== "object")
                            throw TypeError(".layout21.raw.Cell.shapes: object expected");
                        message.shapes[i] = $root.layout21.raw.LayerShapes.fromObject(object.shapes[i]);
                    }
                }
                if (object.instances) {
                    if (!Array.isArray(object.instances))
                        throw TypeError(".layout21.raw.Cell.instances: array expected");
                    message.instances = [];
                    for (var i = 0; i < object.instances.length; ++i) {
                        if (typeof object.instances[i] !== "object")
                            throw TypeError(".layout21.raw.Cell.instances: object expected");
                        message.instances[i] = $root.layout21.raw.Instance.fromObject(object.instances[i]);
                    }
                }
                if (object.annotations) {
                    if (!Array.isArray(object.annotations))
                        throw TypeError(".layout21.raw.Cell.annotations: array expected");
                    message.annotations = [];
                    for (var i = 0; i < object.annotations.length; ++i) {
                        if (typeof object.annotations[i] !== "object")
                            throw TypeError(".layout21.raw.Cell.annotations: object expected");
                        message.annotations[i] = $root.layout21.raw.TextElement.fromObject(object.annotations[i]);
                    }
                }
                if (object.author != null)
                    message.author = String(object.author);
                if (object.copyright != null)
                    message.copyright = String(object.copyright);
                return message;
            };

            /**
             * Creates a plain object from a Cell message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Cell
             * @static
             * @param {layout21.raw.Cell} message Cell
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Cell.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.shapes = [];
                    object.instances = [];
                    object.annotations = [];
                }
                if (options.defaults) {
                    object.name = null;
                    object.author = "";
                    object.copyright = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = $root.layout21.raw.QualifiedName.toObject(message.name, options);
                if (message.shapes && message.shapes.length) {
                    object.shapes = [];
                    for (var j = 0; j < message.shapes.length; ++j)
                        object.shapes[j] = $root.layout21.raw.LayerShapes.toObject(message.shapes[j], options);
                }
                if (message.instances && message.instances.length) {
                    object.instances = [];
                    for (var j = 0; j < message.instances.length; ++j)
                        object.instances[j] = $root.layout21.raw.Instance.toObject(message.instances[j], options);
                }
                if (message.annotations && message.annotations.length) {
                    object.annotations = [];
                    for (var j = 0; j < message.annotations.length; ++j)
                        object.annotations[j] = $root.layout21.raw.TextElement.toObject(message.annotations[j], options);
                }
                if (message.author != null && message.hasOwnProperty("author"))
                    object.author = message.author;
                if (message.copyright != null && message.hasOwnProperty("copyright"))
                    object.copyright = message.copyright;
                return object;
            };

            /**
             * Converts this Cell to JSON.
             * @function toJSON
             * @memberof layout21.raw.Cell
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Cell.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Cell;
        })();

        raw.Instance = (function() {

            /**
             * Properties of an Instance.
             * @memberof layout21.raw
             * @interface IInstance
             * @property {string|null} [name] Instance name
             * @property {layout21.raw.IQualifiedName|null} [cellName] Instance cellName
             * @property {number|null} [rotationClockwiseDegrees] Instance rotationClockwiseDegrees
             * @property {layout21.raw.IPoint|null} [lowerLeft] Instance lowerLeft
             */

            /**
             * Constructs a new Instance.
             * @memberof layout21.raw
             * @classdesc Represents an Instance.
             * @implements IInstance
             * @constructor
             * @param {layout21.raw.IInstance=} [properties] Properties to set
             */
            function Instance(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Instance name.
             * @member {string} name
             * @memberof layout21.raw.Instance
             * @instance
             */
            Instance.prototype.name = "";

            /**
             * Instance cellName.
             * @member {layout21.raw.IQualifiedName|null|undefined} cellName
             * @memberof layout21.raw.Instance
             * @instance
             */
            Instance.prototype.cellName = null;

            /**
             * Instance rotationClockwiseDegrees.
             * @member {number} rotationClockwiseDegrees
             * @memberof layout21.raw.Instance
             * @instance
             */
            Instance.prototype.rotationClockwiseDegrees = 0;

            /**
             * Instance lowerLeft.
             * @member {layout21.raw.IPoint|null|undefined} lowerLeft
             * @memberof layout21.raw.Instance
             * @instance
             */
            Instance.prototype.lowerLeft = null;

            /**
             * Creates a new Instance instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Instance
             * @static
             * @param {layout21.raw.IInstance=} [properties] Properties to set
             * @returns {layout21.raw.Instance} Instance instance
             */
            Instance.create = function create(properties) {
                return new Instance(properties);
            };

            /**
             * Encodes the specified Instance message. Does not implicitly {@link layout21.raw.Instance.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Instance
             * @static
             * @param {layout21.raw.IInstance} message Instance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.cellName != null && Object.hasOwnProperty.call(message, "cellName"))
                    $root.layout21.raw.QualifiedName.encode(message.cellName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.rotationClockwiseDegrees != null && Object.hasOwnProperty.call(message, "rotationClockwiseDegrees"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rotationClockwiseDegrees);
                if (message.lowerLeft != null && Object.hasOwnProperty.call(message, "lowerLeft"))
                    $root.layout21.raw.Point.encode(message.lowerLeft, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Instance message, length delimited. Does not implicitly {@link layout21.raw.Instance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Instance
             * @static
             * @param {layout21.raw.IInstance} message Instance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Instance message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Instance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Instance} Instance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Instance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.cellName = $root.layout21.raw.QualifiedName.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.rotationClockwiseDegrees = reader.int32();
                        break;
                    case 5:
                        message.lowerLeft = $root.layout21.raw.Point.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Instance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Instance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Instance} Instance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Instance message.
             * @function verify
             * @memberof layout21.raw.Instance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Instance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.cellName != null && message.hasOwnProperty("cellName")) {
                    var error = $root.layout21.raw.QualifiedName.verify(message.cellName);
                    if (error)
                        return "cellName." + error;
                }
                if (message.rotationClockwiseDegrees != null && message.hasOwnProperty("rotationClockwiseDegrees"))
                    if (!$util.isInteger(message.rotationClockwiseDegrees))
                        return "rotationClockwiseDegrees: integer expected";
                if (message.lowerLeft != null && message.hasOwnProperty("lowerLeft")) {
                    var error = $root.layout21.raw.Point.verify(message.lowerLeft);
                    if (error)
                        return "lowerLeft." + error;
                }
                return null;
            };

            /**
             * Creates an Instance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Instance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Instance} Instance
             */
            Instance.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Instance)
                    return object;
                var message = new $root.layout21.raw.Instance();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.cellName != null) {
                    if (typeof object.cellName !== "object")
                        throw TypeError(".layout21.raw.Instance.cellName: object expected");
                    message.cellName = $root.layout21.raw.QualifiedName.fromObject(object.cellName);
                }
                if (object.rotationClockwiseDegrees != null)
                    message.rotationClockwiseDegrees = object.rotationClockwiseDegrees | 0;
                if (object.lowerLeft != null) {
                    if (typeof object.lowerLeft !== "object")
                        throw TypeError(".layout21.raw.Instance.lowerLeft: object expected");
                    message.lowerLeft = $root.layout21.raw.Point.fromObject(object.lowerLeft);
                }
                return message;
            };

            /**
             * Creates a plain object from an Instance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Instance
             * @static
             * @param {layout21.raw.Instance} message Instance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Instance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.cellName = null;
                    object.rotationClockwiseDegrees = 0;
                    object.lowerLeft = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.cellName != null && message.hasOwnProperty("cellName"))
                    object.cellName = $root.layout21.raw.QualifiedName.toObject(message.cellName, options);
                if (message.rotationClockwiseDegrees != null && message.hasOwnProperty("rotationClockwiseDegrees"))
                    object.rotationClockwiseDegrees = message.rotationClockwiseDegrees;
                if (message.lowerLeft != null && message.hasOwnProperty("lowerLeft"))
                    object.lowerLeft = $root.layout21.raw.Point.toObject(message.lowerLeft, options);
                return object;
            };

            /**
             * Converts this Instance to JSON.
             * @function toJSON
             * @memberof layout21.raw.Instance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Instance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Instance;
        })();

        raw.Library = (function() {

            /**
             * Properties of a Library.
             * @memberof layout21.raw
             * @interface ILibrary
             * @property {layout21.raw.IQualifiedName|null} [name] Library name
             * @property {Array.<layout21.raw.ICell>|null} [cells] Library cells
             */

            /**
             * Constructs a new Library.
             * @memberof layout21.raw
             * @classdesc Represents a Library.
             * @implements ILibrary
             * @constructor
             * @param {layout21.raw.ILibrary=} [properties] Properties to set
             */
            function Library(properties) {
                this.cells = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Library name.
             * @member {layout21.raw.IQualifiedName|null|undefined} name
             * @memberof layout21.raw.Library
             * @instance
             */
            Library.prototype.name = null;

            /**
             * Library cells.
             * @member {Array.<layout21.raw.ICell>} cells
             * @memberof layout21.raw.Library
             * @instance
             */
            Library.prototype.cells = $util.emptyArray;

            /**
             * Creates a new Library instance using the specified properties.
             * @function create
             * @memberof layout21.raw.Library
             * @static
             * @param {layout21.raw.ILibrary=} [properties] Properties to set
             * @returns {layout21.raw.Library} Library instance
             */
            Library.create = function create(properties) {
                return new Library(properties);
            };

            /**
             * Encodes the specified Library message. Does not implicitly {@link layout21.raw.Library.verify|verify} messages.
             * @function encode
             * @memberof layout21.raw.Library
             * @static
             * @param {layout21.raw.ILibrary} message Library message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Library.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    $root.layout21.raw.QualifiedName.encode(message.name, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.cells != null && message.cells.length)
                    for (var i = 0; i < message.cells.length; ++i)
                        $root.layout21.raw.Cell.encode(message.cells[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Library message, length delimited. Does not implicitly {@link layout21.raw.Library.verify|verify} messages.
             * @function encodeDelimited
             * @memberof layout21.raw.Library
             * @static
             * @param {layout21.raw.ILibrary} message Library message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Library.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Library message from the specified reader or buffer.
             * @function decode
             * @memberof layout21.raw.Library
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {layout21.raw.Library} Library
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Library.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.layout21.raw.Library();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = $root.layout21.raw.QualifiedName.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.cells && message.cells.length))
                            message.cells = [];
                        message.cells.push($root.layout21.raw.Cell.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Library message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof layout21.raw.Library
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {layout21.raw.Library} Library
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Library.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Library message.
             * @function verify
             * @memberof layout21.raw.Library
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Library.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    var error = $root.layout21.raw.QualifiedName.verify(message.name);
                    if (error)
                        return "name." + error;
                }
                if (message.cells != null && message.hasOwnProperty("cells")) {
                    if (!Array.isArray(message.cells))
                        return "cells: array expected";
                    for (var i = 0; i < message.cells.length; ++i) {
                        var error = $root.layout21.raw.Cell.verify(message.cells[i]);
                        if (error)
                            return "cells." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Library message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof layout21.raw.Library
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {layout21.raw.Library} Library
             */
            Library.fromObject = function fromObject(object) {
                if (object instanceof $root.layout21.raw.Library)
                    return object;
                var message = new $root.layout21.raw.Library();
                if (object.name != null) {
                    if (typeof object.name !== "object")
                        throw TypeError(".layout21.raw.Library.name: object expected");
                    message.name = $root.layout21.raw.QualifiedName.fromObject(object.name);
                }
                if (object.cells) {
                    if (!Array.isArray(object.cells))
                        throw TypeError(".layout21.raw.Library.cells: array expected");
                    message.cells = [];
                    for (var i = 0; i < object.cells.length; ++i) {
                        if (typeof object.cells[i] !== "object")
                            throw TypeError(".layout21.raw.Library.cells: object expected");
                        message.cells[i] = $root.layout21.raw.Cell.fromObject(object.cells[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Library message. Also converts values to other types if specified.
             * @function toObject
             * @memberof layout21.raw.Library
             * @static
             * @param {layout21.raw.Library} message Library
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Library.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cells = [];
                if (options.defaults)
                    object.name = null;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = $root.layout21.raw.QualifiedName.toObject(message.name, options);
                if (message.cells && message.cells.length) {
                    object.cells = [];
                    for (var j = 0; j < message.cells.length; ++j)
                        object.cells[j] = $root.layout21.raw.Cell.toObject(message.cells[j], options);
                }
                return object;
            };

            /**
             * Converts this Library to JSON.
             * @function toJSON
             * @memberof layout21.raw.Library
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Library.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Library;
        })();

        return raw;
    })();

    return layout21;
})();

module.exports = $root;
