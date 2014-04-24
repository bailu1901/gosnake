/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.
 Copyright (c) 2014      yin.dongfei@gmail.com

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/** 
 * TypeScript definitions for https://github.com/cocos2d/cocos2d-html5
 *
 * 29/JUN/2013 - Adam Davidson
 * 19/APR/2014 - Dongfei Yin 
 */
declare module cc {
    var COCOS2D_DEBUG: number;

    //#region cocos2d/CCCommon.js
    /**
     * copy an new object
     * @function
     * @param {object|Array} obj source object
     * @return {Array|object}
     */
    function clone(obj: any): void;


    /**
     * Function added for JS bindings compatibility. Not needed in cocos2d-html5.
     * @function
     * @param {object} jsobj subclass
     * @param {object} klass superclass
     */
    function associateWithNative(jsobj: any, superclass: any): void;

    /**
     * Is show bebug info on web page
     * @constant
     * @type {Boolean}
     */
    var IS_SHOW_DEBUG_ON_PAGE: boolean;

    /**
     * Output Debug message.
     * @function
     * @param {String} message
     */
    function log(message: string): void;

    /**
     * Pop out a message box
     * @param {String} message
     * @function
     */
    function MessageBox(message: string): void;

    /**
     * Output Assert message.
     * @function
     * @param {Boolean} cond If cond is false, assert.
     * @param {String} message
     */
    function Assert(cond: boolean, message: string): void;

    /**
     * Update Debug setting.
     * @function
     */
    function initDebugSetting(): void;

    // Enum the language type supportted now
    /**
     * English language code
     * @constant
     * @type Number
     */
    var LANGUAGE_ENGLISH: number;

    /**
     * Chinese language code
     * @constant
     * @type Number
     */
    var LANGUAGE_CHINESE: number;

    /**
     * French language code
     * @constant
     * @type Number
     */
    var LANGUAGE_FRENCH: number;

    /**
     * Italian language code
     * @constant
     * @type Number
     */
    var LANGUAGE_ITALIAN: number;

    /**
     * German language code
     * @constant
     * @type Number
     */
    var LANGUAGE_GERMAN: number;

    /**
     * Spanish language code
     * @constant
     * @type Number
     */
    var LANGUAGE_SPANISH: number;

    /**
     * Russian language code
     * @constant
     * @type Number
     */
    var LANGUAGE_RUSSIAN: number;
    //#endregion cocos2d/CCCommon.js

    //#region cocos2d/CCDirector.js
    /**
     * <p>
     *    Class that creates and handle the main Window and manages how<br/>
     *    and when to execute the Scenes.<br/>
     *    <br/>
     *    The cc.Director is also responsible for:<br/>
     *      - initializing the OpenGL context<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL buffer depth (default one is 0-bit)<br/>
     *      - setting the projection (default one is 3D)<br/>
     *      - setting the orientation (default one is Protrait)<br/>
     *      <br/>
     *    Since the cc.Director is a singleton, the standard way to use it is by calling:<br/>
     *      - cc.Director.getInstance().methodName():void; <br/>
     *    <br/>
     *    The CCDirector also sets the default OpenGL context:<br/>
     *      - GL_TEXTURE_2D is enabled<br/>
     *      - GL_VERTEX_ARRAY is enabled<br/>
     *      - GL_COLOR_ARRAY is enabled<br/>
     *      - GL_TEXTURE_COORD_ARRAY is enabled<br/>
     * </p>
     * @class
     * @extends cc.Class
     */
    export class Director extends Class {
        /**
         * returns a shared instance of the director
         * @function
         * @return {cc.Director}
         */
        static getInstance(): Director;

        /**
         * initializes cc.Director
         * @return {Boolean}
         */
        init(): boolean;

        /**
         *  Draw the scene. This method is called every frame. Don't call it manually.
         */
        drawScene(): void;

        /**
         * end director
         */
        end(): void;

        /**
         * <p>
         *     returns the size of the OpenGL view in points.<br/>
         *     It takes into account any possible rotation (device orientation) of the window
         * </p>
         * @return {cc.Size}
         */
        getWinSize(): Size;

        /**
         * Replaces the running scene with a new one. The running scene is terminated. ONLY call it if there is a running scene.
         * @param {cc.Scene} scene
         */
        replaceScene(scene: Scene): void;

        /**
         * <p>
         *    Enters the Director's main loop with the given Scene.<br/>
         *    Call it to run only your FIRST scene.<br/>
         *    Don't call it if there is already a running scene.
         * </p>
         * @param {cc.Scene} scene
         */
        runWithScene(scene: Scene): void;
        runScene(scene: Scene): void;

        /**
         * Get the FPS value
         * @return {Number}
         */
        getAnimationInterval(): number;

        /**
         * Whether or not to display the FPS on the bottom-left corner
         * @return {Boolean}
         */
        isDisplayStats(): boolean;

        /**
         * Display the FPS on the bottom-left corner
         * @param displayFPS
         */
        setDisplayStats(displayStats: boolean): void;

        /**
         * set Animation Interval
         * @param {Number} value
         */
        setAnimationInterval(value: number): void;
    }
    export var director: Director;
    //#endregion cocos2d/CCDirector.js

    //#region cocos2d/CCDrawingPrimitives.js
    /**
     * <p>
     *   Drawing primitives Utility Class. this class is base class, it contain some render type version: Canvas, WebGL, DOM.<br/>
     *   this class contain some primitive Drawing Method: <br/>
     *     - drawPoint<br/>
     *     - drawLine<br/>
     *     - drawPoly<br/>
     *     - drawCircle<br/>
     *     - drawQuadBezier<br/>
     *     - drawCubicBezier<br/>
     *     You can change the color, width and other property by calling these WebGL API:<br/>
     *     glColor4ub(), glLineWidth(), glPointSize().<br/>
     * </p>
     * @class
     * @extends cc.Class
     * @warning These functions draws the Line, Point, Polygon, immediately. They aren't batched. <br/>
     *   If you are going to make a game that depends on these primitives, I suggest creating a batch.
     */
    export class DrawingPrimitive extends Class {
        /**
         * set render context of drawing primitive
         * @param context
         */
        setRenderContext(context: CanvasRenderingContext2D): void;

        /**
         * returns render context of drawing primitive
         * @return {CanvasContext}
         */
        getRenderContext(): CanvasRenderingContext2D;

        /**
         * Constructor
         * @param {CanvasContext} renderContext
         */
        constructor(renderContext: CanvasRenderingContext2D);

        /**
         * draws a point given x and y coordinate measured in points
         * @param {cc.Point} point
         */
        drawPoint(point: Point): void;

        /**
         * draws an array of points.
         * @param {Array} points point of array
         * @param {Number} numberOfPoints
         */
        drawPoints(points: Point[], numberOfPoints: number): void;

        /**
         * draws a line given the origin and destination point measured in points
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         */
        drawLine(origin: Point, destination: Point): void;

        /**
         * draws a rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         */
        drawRect(origin: Point, destination: Point): void;

        /**
         * draws a solid rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         * @param {cc.Color4F} color
         */
        drawSolidRect(origin: Point, destination: Point, color: Color4F): void;

        /**
         * draws a poligon given a pointer to cc.Point coordiantes and the number of vertices measured in points.
         * @param {Array} vertices a pointer to cc.Point coordiantes
         * @param {Number} numOfVertices the number of vertices measured in points
         * @param {Boolean} closePolygon The polygon can be closed or open
         * @param {Boolean} fill The polygon can be closed or open and optionally filled with current color
         */
        drawPoly(vertices: Point[], numOfVertices: number, closePolygon: boolean, fill: boolean): void;

        /**
         * draws a solid polygon given a pointer to CGPoint coordiantes, the number of vertices measured in points, and a color.
         * @param {Array} poli
         * @param {Number} numberOfPoints
         * @param {cc.Color4F} color
         */
        drawSolidPoly(poli: Point[], numberOfPoints: number, color: Color4F): void;

        /**
         * draws a circle given the center, radius and number of segments.
         * @param {cc.Point} center center of circle
         * @param {Number} radius
         * @param {Number} angle angle in radians
         * @param {Number} segments
         * @param {Boolean} drawLineToCenter
         */
        drawCircle(center: Point, radius: number, angle: number, segments: number, drawLineToCenter: boolean): void;

        /**
         * draws a quad bezier path
         * @param {cc.Point} origin
         * @param {cc.Point} control
         * @param {cc.Point} destination
         * @param {Number} segments
         */
        drawQuadBezier(origin: Point, control: Point, destination: Point, segments: number): void;

        /**
         * draws a cubic bezier path
         * @param {cc.Point} origin
         * @param {cc.Point} control1
         * @param {cc.Point} control2
         * @param {cc.Point} destination
         * @param {Number} segments
         */
        drawCubicBezier(origin: Point, control1: Point, control2: Point, destination: Point, segments: number): void;

        /**
         * draw a catmull rom line
         * @param {cc.PointArray} points
         * @param {Number} segments
         */
        drawCatmullRom(points: Point[], segments: number): void;

        /**
         * draw a cardinal spline path
         * @param {cc.PointArray} config
         * @param {Number} tension
         * @param {Number} segments
         */
        drawCardinalSpline(config: Point[], tension: number, segments: number): void;

        // FIXME: Typescript doesn't support abstract classes so we have to put the common    
        // methods from DrawingPrimitiveCanvas and DrawingPrimitiveWebGL here for convenience

        /**
         * set the drawing color with 4 unsigned bytes
         * @param {Number} r red value (0 to 255)
         * @param {Number} r green value (0 to 255)
         * @param {Number} r blue value (0 to 255)
         * @param {Number} a Alpha value (0 to 255)
         */
        setDrawColor4B(r: number, g: number, b: number, a: number): void;

        // ENDFIXME
    }

    /**
     * Canvas of DrawingPrimitive implement version
     * @class
     * @extends cc.DrawingPrimitive
     */
    export class DrawingPrimitiveCanvas extends DrawingPrimitive {
    }

    /**
     * Canvas of DrawingPrimitive implement version
     * @class
     * @extends cc.DrawingPrimitive
     */
    export class DrawingPrimitiveWebGL extends DrawingPrimitive {
    }
    //#endregion cocos2d/CCDrawingPrimitives.js

    //#region cocos2d/CCLoader.js
    /**
     * A class to pre-load resources before engine start game main loop.
     * @class
     * @extends cc.Scene
     */
    export class Loader extends Class {
        /**
         * Preload resources in the background
         * @param {Array} resources
         * @param {Function|String} selector
         * @param {Object} target
         * @return {cc.Loader}
         * @example
         * //example
         * var g_mainmenu = [
         *    {src:"res/hello.png"},
         *    {src:"res/hello.plist"},
         *
         *    {src:"res/logo.png"},
         *    {src:"res/btn.png"},
         *
         *    {src:"res/boom.mp3"},
         * ]
         *
         * var g_level = [
         *    {src:"res/level01.png"},
         *    {src:"res/level02.png"},
         *    {src:"res/level03.png"}
         * ]
         *
         * //load a list of resources
         * cc.Loader.preload(g_mainmenu, this.startGame, this):void;
         *
         * //load multi lists of resources
         * cc.Loader.preload([g_mainmenu,g_level], this.startGame, this):void;
         */
        static preload(resources: any[], selector: () => void, target: Node): Loader;
    }

    /**
     * Used to display the loading screen
     * @class
     * @extends cc.Scene
     */
    export class LoaderScene extends Scene {
        /**
         * Preload multi scene resources.
         * @param {Array} resources
         * @param {Function|String} selector
         * @param {Object} target
         * @return {cc.LoaderScene}
         * @example
         * //example
         * var g_mainmenu = [
         *    {src:"res/hello.png"},
         *    {src:"res/hello.plist"},
         *
         *    {src:"res/logo.png"},
         *    {src:"res/btn.png"},
         *
         *    {src:"res/boom.mp3"},
         * ]
         *
         * var g_level = [
         *    {src:"res/level01.png"},
         *    {src:"res/level02.png"},
         *    {src:"res/level03.png"}
         * ]
         *
         * //load a list of resources
         * cc.LoaderScene.preload(g_mainmenu, this.startGame, this):void;
         *
         * //load multi lists of resources
         * cc.LoaderScene.preload([g_mainmenu,g_level], this.startGame, this):void;
         */
        static preload(resources: any[], selector: () => void, target: Node): LoaderScene;
        static preload(resources: string[], selector: () => void, target: Node): LoaderScene;
    }
    //#endregion cocos2d/CCLoader.js

    //#region cocos2d/CCScheduler.js
    /**
     * <p>
     *    Scheduler is responsible of triggering the scheduled callbacks.<br/>
     *    You should not use NSTimer. Instead use this class.<br/>
     *    <br/>
     *    There are 2 different types of callbacks (selectors):<br/>
     *       - update selector: the 'update' selector will be called every frame. You can customize the priority.<br/>
     *       - custom selector: A custom selector will be called every frame, or with a custom interval of time<br/>
     *       <br/>
     *    The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update selector'. *
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //register a schedule to scheduler
     * cc.Director.getInstance().getScheduler().scheduleSelector(selector, this, interval, !this._isRunning):void;
     */
    export class Scheduler extends Class {
    }
    //#endregion cocos2d/CCScheduler.js

    //#region cocos2d/actions/CCAction.js
    /**
     * Base class for cc.Action objects.
     * @class
     * @extends cc.Class
     */
    export class Action extends Class {
         /**
         * @return {Boolean}
         */
        isDone(): boolean

        /**
         * @param {Number} dt
         */
        step(dt: number): void;

        /**
         * @param {Number} time
         */
        update(time: number): void;

        reverse(): Action;

        clone(): Action;
    }

    /**
     * <p>Base class actions that do have a finite time duration.<br/>
     * Possible actions: <br/>
     * - An action with a duration of 0 seconds<br/>
     * - An action with a duration of 35.5 seconds  </p>

     * Infinite time actions are valid
     * @class
     * @extends cc.Action
     */
    export class FiniteTimeAction extends Action {
    }
    //#endregion cocos2d/actions/CCAction.js

    //#region cocos2d/actions/CCActionInterval.js
    /**
     * <p> An interval action is an action that takes place within a certain period of time. <br/>
     * It has an start time, and a finish time. The finish time is the parameter<br/>
     * duration plus the start time.</p>
     *
     * <p>These CCActionInterval actions have some interesting properties, like:<br/>
     * - They can run normally (default)  <br/>
     * - They can run reversed with the reverse method   <br/>
     * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
     *
     * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
     * then running it again in Reverse mode. </p>
     *
     * @class
     * @extends cc.FiniteTimeAction
     * @Example
     * // example
     * var pingPongAction = cc.Sequence.create(action, action.reverse()):void;
     */
    export class ActionInterval extends FiniteTimeAction {
    }

    /** Runs actions sequentially, one after another
     * @class
     * @extends cc.ActionInterval
     */
    export class Sequence extends ActionInterval {
        /** helper constructor to create an array of sequenceable actions
         * @param {Array|cc.FiniteTimeAction} tempArray
         * @return {cc.FiniteTimeAction}
         * @example
         * // example
         * // create sequence with actions
         * var seq = cc.Sequence.create(act1, act2):void;
         *
         * // create sequence with array
         * var seq = cc.Sequence.create(actArray):void;
         */
        static create(...rest: FiniteTimeAction[]): Sequence;
    }

    /** Repeats an action a number of times.
     * To repeat an action forever use the CCRepeatForever action.
     * @class
     * @extends cc.ActionInterval
     */
    export class Repeat extends ActionInterval {
        /** creates a CCRepeat action. Times is an unsigned integer between 1 and pow(2,30)
         * @param {cc.FiniteTimeAction} action
         * @param {Number} times
         * @return {cc.Repeat}
         * @example
         * // example
         * var rep = cc.Repeat.create(cc.Sequence.create(jump2, jump1), 5):void;
         */
        static create(action: FiniteTimeAction, times: number): Repeat;
    }

    /**  Repeats an action for ever.  <br/>
     * To repeat the an action for a limited number of times use the Repeat action. <br/>
     * @warning This action can't be Sequenceable because it is not an IntervalAction
     * @class
     * @extends cc.ActionInterval
     */
    export class RepeatForever extends ActionInterval {
        /**
         * Repeat the acton forever
         * @param action
         * @return {cc.RepeatForever}
         * @example
         * // example
         * var repeat = cc.RepeatForever.create(cc.RotateBy.create(1.0, 360)):void;
         */
        static create(action: FiniteTimeAction): RepeatForever;
    }

    /** Spawn a new action immediately
     * @class
     * @extends cc.ActionInterval
     */
    export class Spawn extends ActionInterval {
        /**
         * @param {Array|cc.FiniteTimeAction}tempArray
         * @return {cc.FiniteTimeAction}
         * @example
         * // example
         * var action = cc.Spawn.create(cc.JumpBy.create(2, cc.p(300, 0), 50, 4), cc.RotateBy.create(2, 720)):void;
         */
        static create(...rest: FiniteTimeAction[]): Spawn;
    }

    /** Rotates a cc.Node object to a certain angle by modifying it's
     * rotation attribute. <br/>
     * The direction will be decided by the shortest angle.
     * @class
     * @extends cc.ActionInterval
     */
    export class RotateTo extends ActionInterval {
        /**
         * creates the action with separate rotation angles
         * @param {Number} duration duration in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees.
         * @param {Number} deltaAngleY deltaAngleY in degrees.
         * @return {cc.RotateTo}
         * @example
         * // example
         * var rotateTo = cc.RotateTo.create(2, 61.0):void;
         */
        static create(duration: number, deltaAngleX: number, deltaAngleY?: number): RotateTo;
    }

    /** Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
     * @class
     * @extends  cc.ActionInterval
     */
    export class RotateBy extends ActionInterval {
        /**
         * @param {Number} duration druation in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees
         * @param {Number} deltaAngleY deltaAngleY in degrees
         * @return {cc.RotateBy}
         * @example
         * // example
         * var actionBy = cc.RotateBy.create(2, 360):void;
         */
        static create(duration: number, deltaAngleX: number, deltaAngleY?: number): RotateBy;
    }

    /** Moves a cc.Node object to the position x,y. x and y are absolute coordinates by modifying it's position attribute.
     * @class
     * @extends cc.ActionInterval
     */
    export class MoveTo extends ActionInterval {
        /**
         * @param {Number} duration duration in seconds
         * @param {cc.Point} position
         * @return {cc.MoveTo}
         * @example
         * // example
         * var actionTo = cc.MoveTo.create(2, cc.p(windowSize.width - 40, windowSize.height - 40)):void;
         */
        static create(duration: number, position: Point): MoveTo;
    }

    /** Moves a cc.Node object x,y pixels by modifying it's position attribute. <br/>
     * x and y are relative to the position of the object. <br/>
     * @class
     * @extends cc.MoveTo
     */
    export class MoveBy extends MoveTo {
        /**
         * @param {Number} duration duration in seconds
         * @param {cc.Point} position
         * @return {cc.MoveBy}
         * @example
         * // example
         * var actionBy = cc.MoveBy.create(2, cc.p(80, 80)):void;
         */
        static create(duration: number, position: Point): MoveBy;
    }

    /** Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes
     * @class
     * @extends cc.ActionInterval
     */
    export class SkewTo extends ActionInterval {
        /**
         * @param {Number} t time in seconds
         * @param {Number} sx
         * @param {Number} sy
         * @return {cc.SkewTo}
         * @example
         * // example
         * var actionTo = cc.SkewTo.create(2, 37.2, -37.2):void;
         */
        static create(t: number, sx: number, sy: number): SkewTo;
    }

    /** Skews a cc.Node object by skewX and skewY degrees
     * @class
     * @extends cc.SkewTo
     */
    export class SkewBy extends SkewTo {
        /**
         * @param {Number} t time in seconds
         * @param {Number} sx sx skew in degrees for X axis
         * @param {Number} sy sy skew in degrees for Y axis
         * @return {cc.SkewBy}
         * @example
         * // example
         * var actionBy = cc.SkewBy.create(2, 0, -90):void;
         */
        static create(t: number, sx: number, sy: number): SkewBy;
    }

    /**  Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
     * @class
     * @extends cc.ActionInterval
     */
    export class JumpBy extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {cc.Point} position
         * @param {Number} height
         * @param {Number} jumps
         * @return {cc.JumpBy}
         * @example
         * // example
         * var actionBy = cc.JumpBy.create(2, cc.p(300, 0), 50, 4):void;
         */
        static create(duration: number, position: Point, height: number, jumps: number): JumpBy;
    }

    /**  Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute.
     * @class
     * @extends cc.JumpBy
     */
    export class JumpTo extends JumpBy {
        /**
         * @param {Number} duration
         * @param {cc.Point} position
         * @param {Number} height
         * @param {Number} jumps
         * @return {cc.JumpTo}
         * @example
         * // example
         * var actionTo = cc.JumpTo.create(2, cc.p(300, 300), 50, 4):void;
         */
        static create(duration: number, position: Point, height: number, jumps: number): JumpTo;
    }

    /** An action that moves the target with a cubic Bezier curve by a certain distance.
     * @class
     * @extends cc.ActionInterval
     */
    export class BezierBy extends ActionInterval {
        /**
         * @param {Number} t time in seconds
         * @param {Array} c Array of points
         * @return {cc.BezierBy}
         * @example
         * // example
         * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
         * var bezierForward = cc.BezierBy.create(3, bezier):void;
         *
         */
        static create(t: number, c: Point[]): BezierBy;
    }

    /** An action that moves the target with a cubic Bezier curve to a destination point.
     * @class
     * @extends cc.BezierBy
     */
    export class BezierTo extends BezierBy {
        /**
         * @param {Number} t
         * @param {Array} c array of points
         * @return {cc.BezierTo}
         * @example
         * // example
         * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
         * var bezierTo = cc.BezierTo.create(2, bezier):void;
         */
        static create(t: number, c: Point[]): BezierTo;

    }

    /** Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class ScaleTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} sx  scale parameter in X
         * @param {Number|Null} sy scale parameter in Y, if Null equal to sx
         * @return {cc.ScaleTo}
         * @example
         * // example
         * // It scales to 0.5 in both X and Y.
         * var actionTo = cc.ScaleTo.create(2, 0.5):void;
         *
         * // It scales to 0.5 in x and 2 in Y
         * var actionTo = cc.ScaleTo.create(2, 0.5, 2):void;
         */
        static create(duration: number, sx: number, sy?: number): ScaleTo;
    }

    /** Scales a cc.Node object a zoom factor by modifying it's scale attribute.
     * @class
     * @extends cc.ScaleTo
     */
    export class ScaleBy extends ScaleTo {
        /**
         * @param {Number} duration duration in seconds
         * @param {Number} sx sx  scale parameter in X
         * @param {Number|Null} sy sy scale parameter in Y, if Null equal to sx
         * @return {cc.ScaleBy}
         * @example
         * // example without sy, it scales by 2 both in X and Y
         * var actionBy = cc.ScaleBy.create(2, 2):void;
         *
         * //example with sy, it scales by 0.25 in X and 4.5 in Y
         * var actionBy2 = cc.ScaleBy.create(2, 0.25, 4.5):void;
         */
        static create(duration: number, sx: number, sy?: number): ScaleBy;
    }

    /** Blinks a cc.Node object by modifying it's visible attribute
     * @class
     * @extends cc.ActionInterval
     */
    export class Blink extends ActionInterval {
        /**
         * @param {Number} duration  duration in seconds
         * @param blinks blinks in times
         * @return {cc.Blink}
         * @example
         * // example
         * var action = cc.Blink.create(2, 10):void;
         */
        static create(duration: number, blinks: number): Blink;
    }

    /** Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.<br/>
     * The "reverse" of this action is FadeOut
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeIn extends ActionInterval {
        /**
         * @param {Number} duration duration in seconds
         * @return {cc.FadeIn}
         * @example
         * //example
         * var action = cc.FadeIn.create(1.0):void;
         */
        static create(duration: number): FadeIn;
    }

    /** Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
     * The "reverse" of this action is FadeIn
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeOut extends ActionInterval {
        /**
         * @param {Number} d  duration in seconds
         * @return {cc.FadeOut}
         * @example
         * // example
         * var action = cc.FadeOut.create(1.0):void;
         */
        static create(d: number): FadeOut;
    }

    /** Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} opacity 0-255, 0 is transparent
         * @return {cc.FadeTo}
         * @example
         * // example
         * var action = cc.FadeTo.create(1.0, 0):void;
         */
        static create(duration: number, opacity: number): FadeTo;
    }

    /** Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class TintTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} red 0-255
         * @param {Number} green  0-255
         * @param {Number} blue 0-255
         * @return {cc.TintTo}
         * @example
         * // example
         * var action = cc.TintTo.create(2, 255, 0, 255):void;
         */
        static create(duration: number, red: number, green: number, blue: number): TintTo;
    }

    /**  Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @class
     * @extends cc.ActionInterval
     */
    export class TintBy extends ActionInterval {
        /**
         * @param {Number} duration  duration in seconds
         * @param {Number} deltaRed
         * @param {Number} deltaGreen
         * @param {Number} deltaBlue
         * @return {cc.TintBy}
         * @example
         * // example
         * var action = cc.TintBy.create(2, -127, -255, -127):void;
         */
        static create(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number): TintBy;
    }

    /** Delays the action a certain amount of seconds
     * @class
     * @extends cc.ActionInterval
     */
    export class DelayTime extends ActionInterval {
        /**
         * @param {Number} d duration in seconds
         * @return {cc.DelayTime}
         * @example
         * // example
         * var delay = cc.DelayTime.create(1):void;
         */
        static create(d: number): DelayTime;
    }

    /**
     * Executes an action in reverse order, from time=duration to time=0
     * @warning Use this action carefully. This action is not
     * sequenceable. Use it as the default "reversed" method
     * of your own actions, but using it outside the "reversed"
     * scope is not recommended.
     * @class
     * @extends cc.ActionInterval
     */
    export class ReverseTime extends ActionInterval {
        /**
         * @param {cc.FiniteTimeAction} action
         * @return {cc.ReverseTime}
         * @example
         * // example
         *  var reverse = cc.ReverseTime.create(this):void;
         */
        static create(action: FiniteTimeAction): ReverseTime;
    }

    /**  Animates a sprite given the name of an Animation
     * @class
     * @extends cc.ActionInterval
     */
    export class Animate extends ActionInterval {
        /**
         * create the animate with animation
         * @param {cc.Animation} animation
         * @return {cc.Animate}
         * @example
         * // example
         * // create the animation with animation
         * var anim = cc.Animate.create(dance_grey):void;
         */
        static create(animation: Animation): Animate;
    }
    //#endregion cocos2d/actions/CCActionInterval.js

    //#region cocos2d/actions/CCActionManager.js
    export class ActionManager extends Class {
    }

    /**
     * <p>
     *     Overrides the target of an action so that it always runs on the target<br/>
     *     specified at action creation rather than the one specified by runAction.
     * </p>
     * @class
     * @extends cc.ActionInterval
     */
    export class TargetedAction extends ActionInterval {
    }
    //#endregion cocos2d/actions/CCActionManager.js

    //#region cocos2d/base_nodes/CCNode.js
    /** <p>cc.Node is the main element. Anything thats gets drawn or contains things that get drawn is a cc.Node.<br/>
     The most popular cc.Nodes are: cc.Scene, cc.Layer, cc.Sprite, cc.Menu. (WebGL implement)<br/></p>

     <p>The main features of a cc.Node are: <br/>
     - They can contain other cc.Node nodes (addChild, getChildByTag, removeChild, etc) <br/>
     - They can schedule periodic callback (schedule, unschedule, etc) <br/>
     - They can execute actions (runAction, stopAction, etc) <br/></p>

     <p>Some cc.Node nodes provide extra functionality for them or their children.</p>

     <p>Subclassing a cc.Node usually means (one/all) of: <br/>
     - overriding init to initialize resources and schedule callbacks  <br/>
     - create callbacks to handle the advancement of time <br/>
     - overriding draw to render the node   <br/></p>

     <p>Features of cc.Node: <br/>
     - position  <br/>
     - scale (x, y) <br/>
     - rotation (in degrees, clockwise) <br/>
     - cc.Camera (an interface to gluLookAt ) <br/>
     - cc.GridBase (to do mesh transformations)  <br/>
     - anchor point<br/>
     - size <br/>
     - visible<br/>
     - z-order <br/>
     - openGL z position <br/></P>

     <p> Default values: <br/>
     - rotation: 0 <br/>
     - position: (x=0,y=0) <br/>
     - scale: (x=1,y=1) <br/>
     - contentSize: (x=0,y=0)<br/>
     - anchorPoint: (x=0,y=0)<br/></p>

     <p> Limitations:<br/>
     - A cc.Node is a "void" object. It doesn't have a texture <br/></P>

     <p>Order in transformations with grid disabled <br/>
     -# The node will be translated (position)  <br/>
     -# The node will be rotated (rotation)<br/>
     -# The node will be scaled (scale)  <br/>
     -# The node will be moved according to the camera values (camera) <br/></p>

     <p>Order in transformations with grid enabled<br/>
     -# The node will be translated (position)<br/>
     -# The node will be rotated (rotation) <br/>
     -# The node will be scaled (scale) <br/>
     -# The grid will capture the screen <br/>
     -# The node will be moved according to the camera values (camera) <br/>
     -# The grid will render the captured screen <br/></P>

     <p>Camera:  <br/>
     - Each node has a camera. By default it points to the center of the cc.Node.</P>
     * @class
     * @extends cc.Class
     * @example
     * // example
     * cc.Sprite = cc.Node.extend({}):void;
     * cc.Sprite.initWithImage = function(){
     * };
     */
    export class Node extends Class {

        attr(a: Object): void;

        x: number;
        y: number;
        visible: boolean;
        tag: number;
        scale: number;
        anchorX: number;
        anchorY: number;

        /**
         * set the dirty node
         */
        setNodeDirty(): void;

        /**
         *  <p>get the skew degrees in X </br>
         *  The X skew angle of the node in degrees.  <br/>
         *  This angle describes the shear distortion in the X direction.<br/>
         *  Thus, it is the angle between the Y axis and the left edge of the shape </br>
         *  The default skewX angle is 0. Positive values distort the node in a CW direction.</br>
         *  </p>
         * @return {Number}
         */
        getSkewX(): number;

        /**
         * set the skew degrees in X
         * @param {Number} newSkewX
         */
        setSkewX(newSkewX: number): void;

        /**
         * <p>get the skew degrees in Y               <br/>
         * The Y skew angle of the node in degrees.                            <br/>
         * This angle describes the shear distortion in the Y direction.       <br/>
         * Thus, it is the angle between the X axis and the bottom edge of the shape       <br/>
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.    <br/>
         * </p>
         * @return {Number}
         */
        getSkewY(): number;

        /**
         * set the skew degrees in Y
         * @param {Number} newSkewY
         */
        setSkewY(newSkewY: number): void;

        /**
         * zOrder getter
         * @return {Number}
         */
        getZOrder(): number;

        /**
         * ertexZ getter
         * @return {Number}
         */
        getVertexZ(): number;

        /**
         * vertexZ setter
         * @param {Number} Var
         */
        setVertexZ(Var: number): void;

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. Positive values rotate node CW.
         * @return {Number}
         */
        getRotation(): number;

        /**
         * rotation setter
         * @param {Number} newRotation
         */
        setRotation(newRotation: number): void;

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. <br/>
         * Positive values rotate node CW. It only modifies the X rotation performing a horizontal rotational skew .
         * (support only in WebGl rendering mode)
         * @return {Number}
         */
        getRotationX(): number;

        /**
         * rotationX setter
         * @param {Number} rotationX
         */
        setRotationX(rotationX: number): void;

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle.  <br/>
         * Positive values rotate node CW. It only modifies the Y rotation performing a vertical rotational skew .
         * @return {Number}
         */
        getRotationY(): number;

        /**
         * rotationY setter
         * @param {Number} rotationY
         */
        setRotationY(rotationY: number): void;

        /** Get the scale factor of the node.
         * @warning: Assert when _scaleX != _scaleY.
         * @return {Number}
         */
        getScale(): number;

        /**
         * The scale factor of the node. 1.0 is the default scale factor. It modifies the X and Y scale at the same time.
         * @param {Number} scale or scaleX value
         * @param {Number} scaleY
         */
        setScale(scale: number): void;
        setScale(scaleX: number, scaleY: number): void;

        /**
         * scaleX getter
         * @return {Number}
         */
        getScaleX(): number;

        /**
         * scaleX setter
         * @param {Number} newScaleX
         */
        setScaleX(newScaleX: number): void;

        /**
         * scaleY getter
         * @return {Number}
         */
        getScaleY(): number;

        /**
         * scaleY setter
         * @param {Number} newScaleY
         */
        setScaleY(newScaleY: number): void;

        /**
         * position setter
         * @param {cc.Point|Number} newPosOrxValue
         * @param {Number}  yValue
         */
        setPosition(newPos: Point): void;
        setPosition(xValue: number, yValue: number): void;

        /**
         * <p>Position (x,y) of the node in OpenGL coordinates. (0,0) is the left-bottom corner. </p>
         * @return {cc.Point}
         */
        getPosition(): Point;

        /**
         * @return {Number}
         */
        getPositionX(): number;

        /**
         * @param {Number} x
         */
        setPositionX(x: number): void;

        /**
         * @return {Number}
         */
        getPositionY(): number;

        /**
         * @param {Number} y
         */
        setPositionY(y: number): void;

        /**
         * Get children count
         * @return {Number}
         */
        getChildrenCount(): number;

        /**
         * children getter
         * @return {object}
         */
        getChildren(): Array<Node>;

        /**
         * isVisible getter
         * @return {Boolean}
         */
        isVisible(): boolean;

        /**
         * isVisible setter
         * @param {Boolean} Var
         */
        setVisible(Var: boolean): void;

        /**
         *  <p>anchorPoint is the point around which all transformations and positioning manipulations take place.<br/>
         *  It's like a pin in the node where it is "attached" to its parent. <br/>
         *  The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
         *  But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
         *  The default anchorPoint is (0.5,0.5), so it starts in the center of the node. <br/></p>
         * @return {cc.Point}
         */
        getAnchorPoint(): Point;

        /**
         * @param {cc.Point} point
         */
        setAnchorPoint(point: Point): void;
        setAnchorPoint(x: number, y: number): void;

        /**
         *  The anchorPoint in absolute pixels.  <br/>
         *  you can only read it. If you wish to modify it, use anchorPoint instead
         * @return {cc.Point}
         */
        getAnchorPointInPoints(): Point;

        /** <p>The untransformed size of the node. <br/>
         The contentSize remains the same no matter the node is scaled or rotated.<br/>
         All nodes has a size. Layer and Scene has the same size of the screen. <br/></p>
         * @return {cc.Size}
         */
        getContentSize(): Size;

        /**
         * @param {cc.Size} size
         */
        setContentSize(size: Size): void;

        /**
         * whether or not the node is running
         * @return {Boolean}
         */
        isRunning(): boolean;

        /** A weak reference to the parent
         * @return {cc.Node}
         */
        getParent(): Node;

        /** parent setter
         * @param {cc.Node} Var
         */
        setParent(Var: Node): void;

        /**
         * If true, the Anchor Point will be (0,0) when you position the CCNode.<br/>
         * Used by CCLayer and CCScene
         * @return {Boolean}
         */
        isIgnoreAnchorPointForPosition(): boolean;

        /**
         * ignoreAnchorPointForPosition setter
         * @param {Boolean} newValue
         */
        ignoreAnchorPointForPosition(newValue: boolean): void;

        /**
         * A tag used to identify the node easily
         * @return {Number}
         */
        getTag(): number;

        /** tag setter
         * @param {Number} Var
         */
        setTag(Var: number): void;

        /**
         * A custom user data pointer
         * @return {object}
         */
        getUserData(): any;

        /**
         * @param {object} Var
         */
        setUserData(Var: any): void;

        /**
         * Similar to userData, but instead of holding a void* it holds an id
         * @return {object}
         */
        getUserObject(): any;

        /**
         * Similar to userData, but instead of holding a void* it holds an id
         * @param {object} newValue
         */
        setUserObject(newValue: any): void;

        /**
         * used internally for zOrder sorting, don't change this manually
         * @return {Number}
         */
        getOrderOfArrival(): number;

        /**
         * used internally for zOrder sorting, don't change this manually
         * @param {Number} Var
         */
        setOrderOfArrival(Var: number): void;

        /**
         * <p>cc.ActionManager used by all the actions. <br/>
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)</p>
         * @return {cc.ActionManager}
         */
        getActionManager(): ActionManager;

        /**
         * <p>cc.ActionManager used by all the actions. <br/>
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)</p>
         * @param {cc.ActionManager} actionManager
         */
        setActionManager(actionManager: ActionManager): void;

        /**
         * <p>
         *   cc.Scheduler used to schedule all "updates" and timers.<br/>
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         * </p>
         * @return {cc.Scheduler}
         */
        getScheduler(): Scheduler;

        /**
         * <p>
         *   cc.Scheduler used to schedule all "updates" and timers.<br/>
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         * </p>
         */
        setScheduler(scheduler: Scheduler): void;

        /** returns a "local" axis aligned bounding box of the node. <br/>
         * The returned box is relative only to its parent.
         * @return {cc.Rect}
         */
        getBoundingBox(): Rect;

        /**
         * Stops all running actions and schedulers
         */
        cleanup(): void;

        /** Node description
         * @return {String}
         */
        description(): string;

        // composition: GET
        /**
         * Gets a child from the container given its tag
         * @param {Number} aTag
         * @return {cc.Node}
         */
        getChildByTag(aTag: number): Node;

        // composition: ADD
        /** <p>"add" logic MUST only be on this method <br/> </p>
         *
         * <p>If a class want's to extend the 'addChild' behaviour it only needs  <br/>
         * to override this method </p>
         *
         * @param {cc.Node} child
         * @param {Number} zOrder
         * @param {Number} tag
         */
        addChild(child: Node, zOrder?: number, tag?: number): void;

        // composition: REMOVE
        /**
         * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * If the node orphan, then nothing happens.
         * @param {Boolean} cleanup
         */
        removeFromParent(cleanup: boolean): void;

        /**
         * Remove itself from its parent node.
         * @deprecated
         * @param {Boolean} cleanup
         */
        removeFromParentAndCleanup(cleanup: boolean): void;

        /** <p>Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         *<p> "remove" logic MUST only be on this method  <br/>
         * If a class wants to extend the 'removeChild' behavior it only needs <br/>
         * to override this method </p>
         *
         * @param {cc.Node} child
         * @param {Boolean} cleanup
         */
        removeChild(child: Node, cleanup: boolean): void;

        /**
         * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Number} tag
         * @param {Boolean} cleanup
         */
        removeChildByTag(tag: number, cleanup: boolean): void;

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * @deprecated
         * @param {Boolean | null} cleanup
         */
        removeAllChildrenWithCleanup(cleanup): void;

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Boolean | null } cleanup
         */
        removeAllChildren(cleanup: boolean): void;

        /** Reorders a child according to a new z value. <br/>
         * The child MUST be already added.
         * @param {cc.Node} child
         * @param {Number} zOrder
         */
        reorderChild(child: Node, zOrder: number): void;

        /**
         * <p>performance improvement, Sort the children array once before drawing, instead of every time when a child is added or reordered <br/>
         * don't call this manually unless a child added needs to be removed in the same frame </p>
         */
        sortAllChildren(): void;

        // draw
        /** <p>Override this method to draw your own node. <br/>
         * The following GL states will be enabled by default: <br/>
         - glEnableClientState(GL_VERTEX_ARRAY):void;  <br/>
         - glEnableClientState(GL_COLOR_ARRAY):void; <br/>
         - glEnableClientState(GL_TEXTURE_COORD_ARRAY):void; <br/>
         - glEnable(GL_TEXTURE_2D):void; </p>

         <p>AND YOU SHOULD NOT DISABLE THEM AFTER DRAWING YOUR NODE</p>

         <p>But if you enable any other GL state, you should disable it after drawing your node. </p>
         * @param {CanvasContext} ctx
         */
        draw(ctx: CanvasRenderingContext2D): void;

        /** performs OpenGL view-matrix transformation of it's ancestors.<br/>
         * Generally the ancestors are already transformed, but in certain cases (eg: attaching a FBO) <br/>
         * it's necessary to transform the ancestors again.
         */
        transformAncestors(): void;

        //scene managment
        /**
         * callback that is called every time the cc.Node enters the 'stage'.<br/>
         * If the cc.Node enters the 'stage' with a transition, this callback is called when the transition starts.
         * During onEnter you can't a "sister/brother" node.
         */
        onEnter(): void;

        /**
         * <p>callback that is called when the cc.Node enters in the 'stage'.  <br/>
         * If the cc.Node enters the 'stage' with a transition, this callback is called when the transition finishes.</p>
         */
        onEnterTransitionDidFinish(): void;

        /**
         * <p>callback that is called every time the cc.Node leaves the 'stage'.  <br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts. </p>
         */
        onExitTransitionDidStart(): void;

        /**
         * callback that is called every time the cc.Node leaves the 'stage'.<br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes. <br/>
         * During onExit you can't access a sibling node.
         */
        onExit(): void;

        // actions
        /**
         * Executes an action, and returns the action that is executed.<br/>
         * The node becomes the action's target.
         * @warning Starting from v0.8 actions don't retain their target anymore.
         * @param {cc.Action} action
         * @return {cc.Action}
         */
        runAction(action: Action): void;

        /**
         * Removes all actions from the running action list
         */
        stopAllActions(): void;

        /**
         * Removes an action from the running action list
         * @param {cc.Action} action
         */
        stopAction(action: Action): void;

        /**
         * Removes an action from the running action list given its tag
         * @param {Number} tag
         */
        stopActionByTag(tag: number): void;

        /**
         * Gets an action from the running action list given its tag
         * @param {Number} tag
         * @return {cc.Action}
         */
        getActionByTag(tag: number): Action;

        /** Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
         *    Composable actions are counted as 1 action. Example:<br/>
         *    If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         *    If you are running 7 Sequences of 2 actions, it will return 7.
         * @return {Number}
         */
        numberOfRunningActions(): number;

        // cc.Node - Callbacks
        // timers
        /**
         * schedules the "update" method. It will use the order number 0. This method will be called every frame.<br/>
         * Scheduled methods with a lower order value will be called before the ones that have a higher order value.<br/>
         * Only one "update" method could be scheduled per node.
         */
        scheduleUpdate(): void;

        /**
         * schedules the "update" callback function with a custom priority. This callback function will be called every frame.<br/>
         * Scheduled callback functions with a lower priority will be called before the ones that have a higher value.<br/>
         * Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).<br/>
         * @param {Number} priority
         */
        scheduleUpdateWithPriority(priority: number): void;

        /**
         * unschedules the "update" method.
         */
        unscheduleUpdate(): void;

        /**
         * schedules a callback function with interval, repeat and delay.
         * @param {function} callback_fn
         * @param {Number} interval
         */
        schedule(callback_fn: (dt: number) => void, interval?: number, repeat?: boolean, delay?: number): void;

        /**
         * Schedules a callback function that runs only once, with a delay of 0 or larger
         * @param {cc.Class} callback_fn
         * @param {Number} delay
         */
        scheduleOnce(callback_fn: (dt: number) => void, delay: number): void;

        /**
         * unschedules a custom callback function.
         * @param {function} callback_fn
         */
        unschedule(callback_fn: (dt: number) => void): void;

        /**
         * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
         * Actions are not affected by this method.
         */
        unscheduleAllCallbacks(): void;

        /**
         * resumes all scheduled callback functions and actions.<br/>
         * Called internally by onEnter
         */
        resumeSchedulerAndActions(): void;

        /**
         * pauses all scheduled selectors and actions.<br/>
         * Called internally by onExit
         */
        pauseSchedulerAndActions(): void;

        /**
         *<p>  Sets the additional transform.<br/>
         *  The additional transform will be concatenated at the end of nodeToParentTransform.<br/>
         *  It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).<br/>
         * // create a batchNode<br/>
         * var batch= cc.SpriteBatchNode.create("Icon-114.png"):void;<br/>
         * this.addChild(batch):void;<br/>
         *<br/>
         * // create two sprites, spriteA will be added to batchNode, they are using different textures.<br/>
         * var spriteA = cc.Sprite.createWithTexture(batch->getTexture()):void;<br/>
         * var spriteB = cc.Sprite.create("Icon-72.png"):void;<br/>
         *<br/>
         * batch.addChild(spriteA):void;<br/>
         *<br/>
         * // We can't make spriteB as spriteA's child since they use different textures. So just add it to layer.<br/>
         * // But we want to simulate `parent-child` relationship for these two node.<br/>
         * this.addChild(spriteB):void;<br/>
         *<br/>
         * //position<br/>
         * spriteA.setPosition(ccp(200, 200)):void;<br/>
         *<br/>
         * // Gets the spriteA's transform.<br/>
         * var t = spriteA.nodeToParentTransform():void;<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's postion will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t):void;<br/>
         *<br/>
         * //scale<br/>
         * spriteA.setScale(2):void;<br/>
         *<br/>
         // Gets the spriteA's transform.<br/>
         * * t = spriteA.nodeToParentTransform():void;<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's scale will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t):void;<br/>
         *<br/>
         * //rotation<br/>
         * spriteA.setRotation(20):void;<br/>
         *<br/>
         * // Gets the spriteA's transform.<br/>
         * t = spriteA.nodeToParentTransform():void;<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's rotation will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t):void;<br/>
         </p>
         */
        setAdditionalTransform(additionalTransform: AffineTransform): void;

        /**
         * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
         * The matrix is in Pixels.
         * @return {Number}
         */
        parentToNodeTransform(): AffineTransform;

        /**
         *  Retrusn the world affine transform matrix. The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        nodeToWorldTransform(): AffineTransform;

        /**
         * Returns the inverse world affine transform matrix. The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        worldToNodeTransform(): AffineTransform;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        convertToNodeSpace(worldPoint: Point): Point;

        /**
         * Converts a Point to world space coordinates. The result is in Points.
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        convertToWorldSpace(nodePoint: Point): Point;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        convertToNodeSpaceAR(worldPoint: Point): Point;

        /**
         * Converts a local Point to world space coordinates.The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        convertToWorldSpaceAR(nodePoint: Point): Point;

        /** convenience methods which take a cc.Touch instead of cc.Point
         * @param {cc.Touch} touch
         * @return {cc.Point}
         */
        convertTouchToNodeSpace(touch: Touch): Point;

        /**
         * converts a cc.Touch (world coordinates) into a local coordiante. This method is AR (Anchor Relative).
         * @param {cc.Touch}touch
         * @return {cc.Point}
         */
        convertTouchToNodeSpaceAR(touch: Touch): Point;

        /**
         * Update will be called automatically every frame if "scheduleUpdate" is called, and the node is "live" <br/>
         * (override me)
         * @param {Number} dt
         */
        update(dt: number): void;

        /**
         * updates the quad according the the rotation, position, scale values.
         */
        updateTransform(): void;

        /**
         * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         */
        retain(): void;
        release(): void;
        /// ---- common properties end  ----

        /**
         * recursive method that visit its children and draw them
         */
        visit(): void;

        transform(): void;

        /** Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
         * The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        nodeToParentTransform(): AffineTransform;


    }
    //#endregion cocos2d/base_nodes/CCNode.js

    //#region cocos2d/cocoa/CCAffineTranform.js
    /**
     * @function
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     * @param {Number} tx
     * @param {Number} ty
     */
    export class AffineTransform {
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        constructor(
            a: number,
            b: number,
            c: number,
            d: number,
            tx: number,
            ty: number);
    }
    //#endregion cocos2d/cocoa/CCAffineTranform.js

    //#region cocos2d/cocoa/CCGeometry.js
    /**
     * @class
     * @param {Number} _x
     * @param {Number} _y
     * Constructor
     */
    export class Point {
        x: number;
        y: number;

        constructor(_x: number, _y: number);
    }

    /**
     * Helper macro that creates a cc.Point.
     * @param {Number} x
     * @param {Number} y
     */
    function p(x: number, y: number): Point;

    /**
     * The "left bottom" point -- equivalent to cc.p(0, 0).
     * @function
     * @return {cc.Point}
     */
    function PointZero(): Point;

    /**
     * @class
     * @param {Number} _width
     * @param {Number} _height
     * Constructor
     */
    export class Size {
        width: number;
        height: number;

        constructor(_width: number, _height: number);
    }

    /**
     * @function
     * @param {Number} w width
     * @param {Number} h height
     * @return {cc.Size}
     */
    function size(w: number, h: number): void;

    /**
     * @class
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} width1
     * @param {Number} height1
     * Constructor
     */
    export class Rect {
        origin: Point;
        size: Size;

        width: number;

        constructor(x1: number, y1: number, width1: number, height1: number);
    }

    /**
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @return {cc.Rect}
     */
    function RectMake(x: number, y: number, width: number, height: number): Rect;

    // backward compatible
    function rect(x: number, y: number, w: number, h: number): Rect;

    /**
     * The "zero" rectangle -- equivalent to cc.rect(0, 0, 0, 0).
     * @function
     * @return {cc.Rect}
     */
    function RectZero(): Rect;

    /**
     * @function
     * @param {cc.Rect} rect1
     * @param {cc.Rect} rect2
     * @return {Boolean}
     */
    function rectEqualToRect(rect1: Rect, rect2: Rect): boolean;

    /**
     * @function
     * @param {cc.Rect} rect1
     * @param {cc.Rect} rect2
     * @return {Boolean}
     */
    function rectContainsRect(rect1: Rect, rect2: Rect): boolean;

    /**
     * return the rightmost x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMaxX(rect: Rect): number;

    /**
     * return the midpoint x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMidX(rect: Rect): void;

    /**
     * return the leftmost x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMinX(rect: Rect): void;

    /**
     * Return the topmost y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMaxY(rect: Rect): number;

    /**
     * Return the midpoint y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMidY(rect: Rect): number;

    /**
     * Return the bottommost y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMinY(rect): number;

    /**
     * @function
     * @param {cc.Rect} rect
     * @param {cc.Point} point
     * @return {Boolean}
     */
    function rectContainsPoint(rect: Rect, point: Point): void;

    /**
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {Boolean}
     */
    function rectIntersectsRect(rectA: Rect, rectB: Rect): boolean;

    /**
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {Boolean}
     */
    function rectOverlapsRect(rectA: Rect, rectB: Rect): boolean;

    /**
     * Returns the smallest rectangle that contains the two source rectangles.
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {cc.Rect}
     */
    function rectUnion(rectA: Rect, rectB: Rect): Rect;

    /**
     * Returns the overlapping portion of 2 rectangles
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {cc.Rect}
     */
    function rectIntersection(rectA: Rect, rectB: Rect): Rect;
    //#endregion cocos2d/cocoa/CCGeometry.js

    //#region cocos2d/label_nodes/CCLabelTTF.js
    /**
     * cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels (Canvas implement)<br/>
     * All features from cc.TextureNode are valid in cc.LabelTTF<br/>
     * cc.LabelTTF objects are slow for js-binding on mobile devices.<br/>
     * Consider using cc.LabelAtlas or cc.LabelBMFont instead.<br/>
     * @class
     * @extends cc.Sprite
     */
    export class LabelTTF extends Sprite {

        setString(str: string): void;

        /**
         * creates a cc.LabelTTF from a fontname, alignment, dimension and font size
         * @param {String} label
         * @param {String} fontName
         * @param {Number} fontSize
         * @param {cc.Size} dimensions
         * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment
         * @return {cc.LabelTTF|Null}
         * @example
         * // Example
         * var myLabel = cc.LabelTTF.create('label text',  'Times New Roman', 32, cc.size(32,16), cc.TEXT_ALIGNMENT_LEFT):void;
         */
        static create(...rest: any[]): LabelTTF;
    }
    //#endregion cocos2d/label_nodes/CCLabelTTF.js

    //#region cocos2d/layers_scenes_transitions_nodes/CCScene.js
    /**
     * <p>cc.Scene is a subclass of cc.Node that is used only as an abstract concept.</p>
     *  <p>cc.Scene an cc.Node are almost identical with the difference that cc.Scene has it's
     * anchor point (by default) at the center of the screen.</p>
     *
     * <p>For the moment cc.Scene has no other logic than that, but in future releases it might have
     * additional logic.</p>
     *
     * <p>It is a good practice to use and cc.Scene as the parent of all your nodes.</p>
     * @class
     * @extends cc.Node
     */
    export class Scene extends Node {
        /**
         * Constructor
         */
        constructor();

        /**
         * creates a scene
         * @return {cc.Scene}
         * @example
         * // Example
         * var aScene = cc.Scene.create():void;
         * //OR
         * var aScene = new cc.Scene():void;
         */
        static create(t?: number, scene?: Scene): Scene;
    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/CCScene.js

    //#region cocos2d/layers_scenes_transitions_nodes/CCLayer.js
    /** cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.<br/>
     * All features from cc.Node are valid, plus the following new features:<br/>
     * It can receive iPhone Touches<br/>
     * It can receive Accelerometer input
     * @class
     * @extends cc.Node
     */
    export class Layer extends Node {
        /**
         *
         * @return {Boolean}
         */
        init(...args: any[]): boolean;

        isMouseEnabled(): boolean;

        setMouseEnabled(enabled: boolean): void;

        setMousePriority(priority: number): void;

        getMousePriority(): number;

        /**
         * whether or not it will receive Touch events.<br/>
         * You can enable / disable touch events with this property.<br/>
         * Only the touches of this node will be affected. This "method" is not propagated to it's children.<br/>
         * @return {Boolean}
         */
        isTouchEnabled(): boolean;

        /**
         * Enable touch events
         * @param {Boolean} enabled
         */
        setTouchEnabled(enabled: boolean): void;

        /** returns the priority of the touch event handler
         * @return {Number}
         */
        getTouchPriority(): number;

        /** Sets the touch event handler priority. Default is 0.
         * @param {Number} priority
         */
        setTouchPriority(priority: number): void;

        /** returns the touch mode.
         * @return {Number}
         */
        getTouchMode(): number;

        /** Sets the touch mode.
         * @param {Number} mode
         */
        setTouchMode(mode: number): void;

        /**
         * whether or not it will receive Accelerometer events<br/>
         * You can enable / disable accelerometer events with this property.
         * @return {Boolean}
         */
        isAccelerometerEnabled(): boolean;

        /**
         * isAccelerometerEnabled setter
         * @param {Boolean} enabled
         */
        setAccelerometerEnabled(enabled: boolean): void;

        /**
         * accelerometerInterval setter
         * @param {Number} interval
         */
        setAccelerometerInterval(interval: number): void;

        onAccelerometer(accelerationValue: number): void;

        /**
         * whether or not it will receive keyboard events<br/>
         * You can enable / disable accelerometer events with this property.<br/>
         * it's new in cocos2d-x
         * @return {Boolean}
         */
        isKeyboardEnabled(): boolean;

        /**
         * Enable Keyboard interaction
         * @param {Boolean} enabled
         */
        setKeyboardEnabled(enabled: boolean): void;

        /**
         * This is run when ever a layer just become visible
         */
        onEnter(): void;

        /**
         * @function
         */
        onExit(): void;

        /**
         * this is called when ever a layer is a child of a scene that just finished a transition
         */
        onEnterTransitionDidFinish(): void;

        // ---------------------CCTouchDelegate interface------------------------------

        /**
         * default implements are used to call script callback if exist<br/>
         * you must override these touch functions if you wish to utilize them
         * @param {cc.Touch} touch
         * @param {event} event
         * @return {Boolean}
         */
        onTouchBegan(touch: Touch, event): boolean;

        /**
         * callback when a touch event moved
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchMoved(touch: Touch, event): void;

        /**
         * callback when a touch event finished
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchEnded(touch: Touch, event): void;

        /**
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchCancelled(touch: Touch, event): void;

        /**
         * Touches is the same as Touch, except this one can handle multi-touch
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesBegan(touch: Touch, event): void;

        /**
         * when a touch moved
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesMoved(touch: Touch, event): void;

        /**
         * when a touch finished
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesEnded(touch: Touch, event): void;

        /**
         * @param touch
         * @param event
         */
        onTouchesCancelled(touch: Touch, event): void;

        // ---------------------CCMouseEventDelegate interface------------------------------

        /**
         * <p>called when the "mouseDown" event is received. <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseDown(event): boolean;

        /**
         * <p>called when the "mouseDragged" event is received.         <br/>
         * Return YES to avoid propagating the event to other delegates.</p>
         * @param event
         * @return {Boolean}
         */
        onMouseDragged(event): boolean;

        /**
         * <p> called when the "mouseMoved" event is received.            <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseMoved(event): boolean;

        /**
         * <p> called when the "mouseUp" event is received.               <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseUp(event): boolean;

        //right
        /**
         * <p> called when the "rightMouseDown" event is received.        <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseDown(event): boolean;

        /**
         * <p> called when the "rightMouseDragged" event is received.    <br/>
         * Return YES to avoid propagating the event to other delegates. </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseDragged(event): boolean;

        /**
         * <p> called when the "rightMouseUp" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseUp(event): boolean;

        //other
        /**
         * <p>called when the "otherMouseDown" event is received.         <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseDown(event): boolean;

        /**
         * <p> called when the "otherMouseDragged" event is received.     <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseDragged(event): boolean;

        /**
         * <p> called when the "otherMouseUp" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseUp(event): boolean;

        //scroll wheel
        /**
         * <p> called when the "scrollWheel" event is received.           <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onScrollWheel(event): boolean;

        // enter / exit
        /**
         *  <p> called when the "mouseEntered" event is received.         <br/>
         *  Return YES to avoid propagating the event to other delegates. </p>
         * @param theEvent
         * @return {Boolean}
         */
        onMouseEntered(theEvent): boolean;

        /**
         * <p> called when the "mouseExited" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates. </p>
         * @param theEvent
         * @return {Boolean}
         */
        onMouseExited(theEvent): boolean;

        // ---------------------CCKeyboardDelegate interface------------------------------

        /**
         * Call back when a key is pressed down
         * @param {Integer} keyCode
         * @example
         * // example
         * if(keyCode == cc.KEY.w){}
         */
        onKeyDown(keyCode: number): void;

        /**
         * Call back when a key is released
         * @param {Integer} keyCode
         * @example
         * // example
         * if(keyCode == cc.KEY.w){}
         */
        onKeyUp(keyCode: number): void;

        /**
         * creates a layer
         * @example
         * // Example
         * var myLayer = cc.Layer.create():void;
         * //Yes! it's that simple
         * @return {cc.Layer|Null}
         */
        static create(): Layer;
    }

    /**
     * creates a cc.LayerColorCanvas with color, width and height in Points
     * @param {cc.Color4B} color
     * @param {Number|Null} width
     * @param {Number|Null} height
     * @return {cc.LayerColor}
     * @example
     * // Example
     * //Create a yellow color layer as background
     * var yellowBackground = cc.LayerColor.create(cc.c4b(255,255,0,255)):void;
     * //If you didnt pass in width and height, it defaults to the same size as the canvas
     *
     * //create a yellow box, 200 by 200 in size
     * var yellowBox = cc.LayerColorCanvas.create(cc.c3b(255,255,0,255), 200, 200):void;
     */
    export class LayerColor extends Layer {
        /**
         * @param {cc.Color4B} color
         * @param {Number} width
         * @param {Number} height
         * @return {Boolean}
         */
        init(...args: any[]/*color: Color4B, width: number, height: number*/): boolean;

        static create(color?: Color4B, width?: number, height?: number): LayerColor;
    }

    /**
     * <p>
     * CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.<br/>
     *<br/>
     * All features from cc.LayerColor are valid, plus the following new features:<br/>
     * <ul><li>direction</li>
     * <li>final color</li>
     * <li>interpolation mode</li></ul>
     * <br/>
     * Color is interpolated between the startColor and endColor along the given<br/>
     * vector (starting at the origin, ending at the terminus).  If no vector is<br/>
     * supplied, it defaults to (0, -1) -- a fade from top to bottom.<br/>
     * <br/>
     * If 'compressedInterpolation' is disabled, you will not see either the start or end color for<br/>
     * non-cardinal vectors; a smooth gradient implying both end points will be still<br/>
     * be drawn, however.<br/>
     *<br/>
     * If 'compressedInterpolation' is enabled (default mode) you will see both the start and end colors of the gradient.
     * </p>
     * @class
     * @extends cc.LayerColor
     */
    export class LayerGradient extends LayerColor {
        /**
         * get the starting color
         * @return {cc.Color3B}
         */
        getStartColor(): Color3B;

        /**
         * set the starting color
         * @param {cc.Color3B} color
         * @example
         * // Example
         * myGradientLayer.setStartColor(cc.c3b(255,0,0)):void;
         * //set the starting gradient to red
         */
        setStartColor(color: Color3B): void;

        /**
         * set the end gradient color
         * @param {cc.Color3B} color
         * @example
         * // Example
         * myGradientLayer.setEndColor(cc.c3b(255,0,0)):void;
         * //set the ending gradient to red
         */
        setEndColor(color: Color3B): void;

        /**
         * get the end color
         * @return {cc.Color3B}
         */
        getEndColor(): Color3B;

        /**
         * set starting gradient opacity
         * @param {Number} o from 0 to 255, 0 is transparent
         */
        setStartOpacity(o: number): void;

        /**
         * get the starting gradient opacity
         * @return {Number}
         */
        getStartOpacity(): number;

        /**
         * set the end gradient opacity
         * @param {Number} o
         */
        setEndOpacity(o: number): void;

        /**
         * get the end gradient opacity
         * @return {Number}
         */
        getEndOpacity(): number;

        /**
         * set vector
         * @param {cc.Point} Var
         */
        setVector(Var: Point): void;

        /**
         * @return {cc.Point}
         */
        getVector(): Point;

        /** is Compressed Interpolation
         * @return {Boolean}
         */
        isCompressedInterpolation(): boolean;

        /**
         * @param {Boolean} compress
         */
        setCompressedInterpolation(compress: boolean): void;

        /**
         * @param {cc.Color4B} start starting color
         * @param {cc.Color4B} end
         * @param {cc.Point|Null} v
         * @return {Boolean}
         */
        init(start: Color4B, end: Color4B, v?: Point): boolean;
    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/CCLayer.js

    //#region cocos2d/layers_scenes_transitions_nodes/Transition.js
    /**
     * A tag constant for identifying fade scenes
     * @constant
     * @type Number
     */
    var SCENE_FADE: number;

    /**
     * cc.TransitionEaseScene can ease the actions of the scene protocol.
     * @class
     * @extends cc.Class
     */
    export class TransitionEaseScene extends Class {
        /**
         * returns the Ease action that will be performed on a linear action.
         */
        easeActionWithAction(): void;
    }

    /**
     * horizontal orientation Type where the Left is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_LEFT_OVER: number;
    /**
     * horizontal orientation type where the Right is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_RIGHT_OVER: number;
    /**
     * vertical orientation type where the Up is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_UP_OVER: number;
    /**
     * vertical orientation type where the Bottom is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_DOWN_OVER: number;

    export class TransitionFade extends TransitionScene {
        /**
         * @override
         */
        onEnter(): void;

        /**
         * @override
         */
        onExit(): void;

        /**
         * initializes the transition with a duration and with an RGB color
         * @param {Number} t time in seconds
         * @param {cc.Scene} scene
         * @param {cc.Color} color
         * @return {Boolean}
         */
        initWithDuration(t: number, scene: Scene, color?: Color4B): boolean;

        /**
         * create a cc.TransitionProgress object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgress}
         */
        static create(t?: number, scene?: Scene, color?: Color4B): TransitionFade;
    }

    /**
     * @class
     * @extends cc.Scene
     */
    export class TransitionScene extends Scene {
        /**
         * custom onEnter
         */
        onEnter(): void;

        /**
         * custom onExit
         */
        onExit(): void;

        /**
         * custom cleanup
         */
        cleanup(): void;

        /**
         * initializes a transition with duration and incoming scene
         * @param {Number} t time in seconds
         * @param {cc.Scene} scene a scene to transit to
         * @return {Boolean} return false if error
         */
        initWithDuration(t: number, scene: Scene): boolean;

        /**
         * called after the transition finishes
         */
        finish(): void;

        /**
         * set hide the out scene and show in scene
         */
        hideOutShowIn(): void;
    }
    //#region cocos2d/layers_scenes_transitions_nodes/Transition.js

    //#region cocos2d/layers_scenes_transitions_nodes/TransitionProgress.js
    /**
     * tag for scene redial
     * @constant
     * @type Number
     */
    var SCENE_RADIAL: number;

    /**
     * cc.TransitionProgress transition.
     * @class
     * @extends cc.TransitionScene
     */
    export class TransitionProgress extends TransitionScene {
        /**
         * @override
         */
        onEnter(): void;

        /**
         * @override
         */
        onExit(): void;

        /**
         * create a cc.TransitionProgress object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgress}
         */
        static create(t?: number, scene?: Scene): TransitionProgress;
    }

    /**
     *  cc.TransitionRadialCCW transition.<br/>
     *  A counter colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressRadialCCW extends TransitionProgress {
        /**
         * create a cc.TransitionProgressRadialCCW object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressRadialCCW}
         */
        static create(t?: number, scene?: Scene): TransitionProgressRadialCCW;
    }

    /**
     * cc.TransitionRadialCW transition.<br/>
     * A counter colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressRadialCW extends TransitionProgress {
        /**
         * create a cc.TransitionProgressRadialCW object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressRadialCW}
         */
        static create(t?: number, scene?: Scene): TransitionProgressRadialCW;
    }

    /**
     * cc.TransitionProgressHorizontal transition.<br/>
     * A  colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressHorizontal extends TransitionProgress {
        /**
         * create a cc.TransitionProgressHorizontal object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressHorizontal}
         */
        create(t: number, scene: Scene): TransitionProgressHorizontal;
    }

    /**
     * cc.TransitionProgressVertical transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressVertical extends TransitionProgress {
        /**
         * create a cc.TransitionProgressVertical object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressVertical}
         */
        create(t: number, scene: Scene): TransitionProgressVertical;
    }

    /**
     * cc.TransitionProgressInOut transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressInOut extends TransitionProgress {
        /**
         * create a cc.TransitionProgressInOut object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressInOut}
         */
        create(t: number, scene: Scene): TransitionProgressInOut;
    }

    /**
     * cc.TransitionProgressOutIn transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressOutIn extends TransitionProgress {
        /**
         * create a cc.TransitionProgressOutIn object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressOutIn}
         */
        create(t: number, scene: Scene): TransitionProgressOutIn;
    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/TransitionProgress.js

    //#region cocos2d/menu_nodes/CCMenu.js
    /**
     * <p> Features and Limitation:<br/>
     *  - You can add MenuItem objects in runtime using addChild:<br/>
     *  - But the only accecpted children are MenuItem objects</p>
     * @class
     * @extends cc.Layer
     */
    export class Menu extends Layer {

        ctor(menuItems: MenuItem[]): void;

        onEnter(): void;



        /**
         * return whether or not the menu will receive events
         * @return {Boolean}
         */
        isEnabled(): boolean;

        /**
         * set whether or not the menu will receive events
         * @param {Boolean} enabled
         */
        setEnabled(enabled: boolean): void;

        /**
         * initializes a cc.Menu with it's items
         * @param {Array} args
         * @return {Boolean}
         */
        initWithItems(args: MenuItem[]): void;

        /**
         * initializes a cc.Menu with a Array of cc.MenuItem objects
         * @param {Array} arrayOfItems
         * @return {Boolean}
         */
        initWithArray(arrayOfItems: MenuItem[]): void;

        /**
         * align items vertically with default padding
         */
        alignItemsVertically(): void;

        /**
         * align items vertically with specified padding
         * @param {Number} padding
         */
        alignItemsVerticallyWithPadding(padding: number): void;
        /**
         * align items horizontally with default padding
         */
        alignItemsHorizontally(): void;

        /**
         * align items horizontally with specified padding
         * @param {Number} padding
         */
        alignItemsHorizontallyWithPadding(padding: number): void;

        /**
         * align items in columns
         * @example
         * // Example
         * menu.alignItemsInColumns(3,2,3)// this will create 3 columns, with 3 items for first column, 2 items for second and 3 for third
         *
         * menu.alignItemsInColumns(3,3)//this creates 2 columns, each have 3 items
         */
        alignItemsInColumns(...args: number[]): void;

        /**
         * align menu items in rows
         * @example
         * // Example
         * menu.alignItemsInRows(5,3)//this will align items to 2 rows, first row with 5 items, second row with 3
         *
         * menu.alignItemsInRows(4,4,4,4)//this creates 4 rows each have 4 items
         */
        alignItemsInRows(...args: number[]): void;



        /**
         * custom on exit
         */
        onExit(): void;

        /**
         * create a new menu
         * @return {cc.Menu}
         * @example
         * // Example
         * //there is no limit on how many menu item you can pass in
         * var myMenu = cc.Menu.create(menuitem1, menuitem2, menuitem3):void;
         */
        static create(...nodes: Node[]): Menu;
    }
    //#endregion cocos2d/menu_nodes/CCMenu.js

    //#region cocos2d/menu_nodes/CCMenuItem.js
    /**
     * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
     * @class
     * @extends cc.Node
     */
    export class MenuItem extends Node {
        /**
         * MenuItem is selected
         * @return {Boolean}
         */
        isSelected(): boolean;

        /**
         * set the target/selector of the menu item
         * @param {function|String} selector
         * @param {cc.Node} rec
         */
        setTarget(selector, rec: Node): void;

        /**
         * MenuItem is Enabled
         * @return {Boolean}
         */
        isEnabled(): boolean;

        /**
         * set enable value of MenuItem
         * @param {Boolean} enable
         */
        setEnabled(enable: boolean): void;

        /**
         * @param {function|String} selector
         * @param {cc.Node} rec
         * @return {Boolean}
         */
        initWithCallback(selector, rec: Node): boolean;

        /**
         * return rect value of cc.MenuItem
         * @return {cc.Rect}
         */
        rect(): Rect;

        /**
         * same as setIsSelected(true)
         */
        selected(): void;

        /**
         * same as setIsSelected(false)
         */
        unselected(): void;

        /**
         * @param {function|String} selector
         * @param {cc.Node} rec
         */
        setCallback(selector, rec: Node): void;

        /**
         * call the selector with target
         */
        activate(): void;
    }

    /**
     *  Any cc.Node that supports the cc.LabelProtocol protocol can be added.<br/>
     * Supported nodes:<br/>
     * - cc.BitmapFontAtlas<br/>
     * - cc.LabelAtlas<br/>
     * - cc.LabelTTF<br/>
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemLabel extends MenuItem {
        /**
         * @param {cc.Node} label
         * @param {function|String|Null} selector
         * @param {cc.Node|Null} target
         * @return {cc.MenuItemLabel}
         */
        static create(...args: any[]/*label, selector, target*/): MenuItemLabel;
    }

    /**
     * Helper class that creates a MenuItemLabel class with a LabelAtlas
     * @class
     * @extends cc.MenuItemLabel
     */
    export class MenuItemAtlasFont extends cc.MenuItemLabel {
        /**
         * create menu item from string with font
         * @param {String} value the text to display
         * @param {String} charMapFile the character map file
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {cc.Node|Null} target
         * @param {function|String|Null} selector
         * @return {cc.MenuItemAtlasFont}
         * @example
         * // Example
         * var item = cc.MenuItemAtlasFont.create('text to display', 'font.fnt', 12, 32, ' ')
         *
         * //OR
         * var item = cc.MenuItemAtlasFont.create('text to display', 'font.fnt', 12, 32, ' ', game, game.run)
         */
        static create(...args: any[]/*value, charMapFile, itemWidth, itemHeight, startCharMap, target, selector*/): MenuItemAtlasFont;
    }

    /**
     * Helper class that creates a CCMenuItemLabel class with a Label
     * @class
     * @extends cc.MenuItemLabel
     */
    export class MenuItemFont extends MenuItemLabel {
        /**
         * @param {Number} s
         */
        static setFontSize(s: number): void;

        /**
         *
         * @return {Number}
         */
        static fontSize(): number;

        /**
         * @param {String} name
         */
        static setFontName(name: string): void;

        /**
         * @return {String}
         */
        static fontName(): string;

        /**
         * create a menu item from string
         * @param {String} value the text to display
         * @param {String|function|Null} selector the callback to run, either in function name or pass in the actual function
         * @param {cc.Node|Null} target the target to run callback
         * @return {cc.MenuItemFont}
         * @example
         * // Example
         * var item = cc.MenuItemFont.create("Game start", 'start', Game)
         * //creates a menu item from string "Game start", and when clicked, it will run Game.start()
         *
         * var item = cc.MenuItemFont.create("Game start", game.start, Game)//same as above
         *
         * var item = cc.MenuItemFont.create("i do nothing")//create a text menu item that does nothing
         *
         * //you can set font size and name before or after
         * cc.MenuItemFont.setFontName('my Fancy Font'):void;
         * cc.MenuItemFont.setFontSize(62):void;
         */
        static create(...args: any[]/*value, selector, target*/): MenuItemFont;
    }

    /**
     * CCMenuItemSprite accepts CCNode<CCRGBAProtocol> objects as items.<br/>
     The images has 3 different states:<br/>
     - unselected image<br/>
     - selected image<br/>
     - disabled image<br/>
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemSprite extends MenuItem {
        /**
         * create a menu item from sprite
         * @param {Image} normal normal state image
         * @param {Image|Null} selected selected state image
         * @param {Image|cc.Node|Null} three disabled state image OR target node
         * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
         * @param {String|function|Null} five callback function name in string or actual function
         * @return {cc.MenuItemSprite}
         * @example
         * // Example
         * var item = cc.MenuItemSprite.create(normalImage)//create a menu item from a sprite with no functionality
         *
         * var item = cc.MenuItemSprite.create(normalImage, selectedImage)//create a menu Item, nothing will happen when clicked
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, disabledImage)//same above, but with disabled state image
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, 'callback', targetNode)//create a menu item, when clicked runs targetNode.callback()
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, disabledImage, targetNode.callback, targetNode)
         * //same as above, but with disabled image, and passing in callback function
         */
        static create(...args: any[]/*normalSprite, selectedSprite, three, four, five*/): MenuItemSprite;
    }

    /**
     * cc.MenuItemImage accepts images as items.<br/>
     * The images has 3 different states:<br/>
     * - unselected image<br/>
     * - selected image<br/>
     * - disabled image<br/>
     * <br/>
     * For best results try that all images are of the same size<br/>
     * @class
     * @extends cc.MenuItemSprite
     */
    export class MenuItemImage extends MenuItemSprite {
        /**
         * creates a new menu item image
         * @param {String} normalImage file name for normal state
         * @param {String} selectedImage image for selected state
         * @param {String|cc.Node} three Disabled image OR allback function
         * @param {String|function|Null} four callback function, either name in string or pass the whole function OR the target
         * @param {cc.Node|String|function|Null} five cc.Node target to run callback when clicked
         * @return {cc.MenuItemImage}
         * @example
         * // Example
         * //create a dom menu item with normal and selected state, when clicked it will run the run function from gameScene object
         * var item = cc.MenuItemImage.create('normal.png', 'selected.png', 'run', gameScene)
         *
         * //same as above, but pass in the actual function and disabled image
         * var item = cc.MenuItemImage.create('normal.png', 'selected.png', 'disabled.png', gameScene.run, gameScene)
         */
        static create(): MenuItemImage;
        static create(normalImage: string, selectedImage: string, three: (sender: any) => void): MenuItemImage;
        static create(normalImage: string, selectedImage: string, three: (sender: any) => void, four: Node): MenuItemImage;
        static create(normalImage: string, selectedImage: string, three: string, four: (sender: any) => void, five: Node): MenuItemImage;
    }

    /**
     * A simple container class that "toggles" it's inner items<br/>
     * The inner items can be any MenuItem
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemToggle extends MenuItem {
        /**
         * @return {Number}
         */
        getOpacity(): number;

        /**
         * @param {Number} Opacity
         */
        setOpacity(Opacity: number): void;

        /**
         * @return {cc.Color3B}
         */
        getColor(): Color3B;

        /**
         * @param {cc.Color3B} Color
         */
        setColor(Color: Color3B): void;

        /**
         * @return {Number}
         */
        getSelectedIndex(): number;

        /**
         * @param {Number} SelectedIndex
         */
        setSelectedIndex(SelectedIndex: number): void;

        /**
         * similar to get children
         * @return {cc.MenuItem}
         */
        getSubItems(): MenuItem[];

        /**
         * @param {cc.MenuItem} SubItems
         */
        setSubItems(SubItems: MenuItem[]): void;

        /**
         * @param {cc.MenuItem} args[0...last-2] the rest in the array are cc.MenuItems
         * @param {function|String} args[last-1] the second item in the args array is the callback
         * @param {cc.Node} args[last] the first item in the args array is a target
         * @return {Boolean}
         */
        initWithItems(...args: any[]): boolean;

        /**
         * @param {cc.MenuItem} item
         */
        addSubItem(item: MenuItem): void;

        /**
         * activate the menu item
         */
        activate(): void;

        /**
         * menu item is selected (runs callback)
         */
        selected(): void;

        /**
         * menu item goes back to unselected state
         */
        unselected(): void;

        /**
         * @param {Boolean} enabled
         */
        setEnabled(enabled: boolean): void;

        /**
         * returns the selected item
         * @return {cc.MenuItem}
         */
        selectedItem(): MenuItem;

        setOpacityModifyRGB(value: boolean): void;

        isOpacityModifyRGB(): boolean;

        onEnter(): void;

        setCallback(func: any): void;

        /**
         * create a simple container class that "toggles" it's inner items<br/>
         * The inner items can be any MenuItem
         * @return {cc.MenuItemToggle}
         * @example
         * // Example
         *
         * //create a toggle item with 2 menu items (which you can then toggle between them later)
         * var toggler = cc.MenuItemToggle.create(this, this.callback, cc.MenuItemFont.create("On"), cc.MenuItemFont.create("Off"))
         * //Note: the first param is the target, the second is the callback function, afterwards, you can pass in any number of menuitems
         *
         * //if you pass only 1 variable, then it must be a cc.MenuItem
         * var notYetToggler = cc.MenuItemToggle.create(cc.MenuItemFont.create("On")):void;//it is useless right now, until you add more stuff to it
         * notYetToggler.addSubItem(cc.MenuItemFont.create("Off")):void;
         * //this is useful for constructing a toggler without a callback function (you wish to control the behavior from somewhere else)
         */
        static create(...args: any[]): MenuItemToggle;
    }
    //#endregion cocos2d/menu_nodes/CCMenuItem.js

    //#region cocos2d/platform/AppControl.js
    /**
     * Controller of Game Application
     * @class
     * @extends cc.Class
     */
    export class AppController extends Class {
        /**
         * did something when Finish Launching
         * @return {Boolean}
         */
        didFinishLaunchingWithOptions(): boolean;

        /**
         * Return Controller of Game Application
         * @return {cc.AppController}
         */
        static shareAppController(): AppController;
    }
    //#endregion cocos2d/platform/AppControl.js

    //#region cocos2d/platform/CCApplication.js
    /**
     * Device type
     * @constant
     * @type {Object}
     */
    enum TARGET_PLATFORM {
        WINDOWS,//: 0,
        LINUX,//: 1,
        MACOS,//: 2,
        ANDROID,//: 3,
        IPHONE,//: 4,
        IPAD,//: 5,
        BLACKBERRY,//: 6,
        NACL,//: 7,
        EMSCRIPTEN,//: 8,
        MOBILE_BROWSER,//: 100,
        PC_BROWSER,//: 101
    }

    /**
     * Device oriented vertically, home button on the bottom
     * @constant
     * @type Number
     */
    var ORIENTATION_PORTRAIT: number;

    /**
     * Device oriented vertically, home button on the top
     * @constant
     * @type Number
     */
    var ORIENTATION_PORTRAIT_UPSIDE_DOWN: number;

    /**
     * Device oriented horizontally, home button on the right
     * @constant
     * @type Number
     */
    var ORIENTATION_LANDSCAPE_LEFT: number;

    /**
     * Device oriented horizontally, home button on the left
     * @constant
     * @type Number
     */
    var ORIENTATION_LANDSCAPE_RIGHT: number;

    //engine render type

    /**
     * Canvas of render type
     * @constant
     * @type Number
     */
    var CANVAS: number;

    /**
     * WebGL of render type
     * @constant
     * @type Number
     */
    var WEBGL: number;

    /**
     * drawing primitive of game engine
     * @type cc.DrawingPrimitive
     */
    var drawingUtil: DrawingPrimitive;

    /**
     * main Canvas 2D Context of game engine
     * @type CanvasContext
     */
    var renderContext: CanvasRenderingContext2D;

    /**
     * main Canvas of game engine
     * @type HTMLCanvasElement
     */
    var canvas: HTMLCanvasElement;

    /**
     * This Div element contain all game canvas
     * @type HTMLDivElement
     */
    var gameDiv: HTMLDivElement;

    /**
     * current render type of game engine
     * @type Number
     */
    var renderContextType: number;

    /**
     * save original size of canvas, use for resize canvas
     * @type cc.Size
     */
    var originalCanvasSize: Size;

    /**
     * <p>
     *   setup game main canvas,renderContext,gameDiv and drawingUtil with argument  <br/>
     *   <br/>
     *   can receive follow type of arguemnt: <br/>
     *      - empty: create a canvas append to document's body, and setup other option    <br/>
     *      - string: search the element by document.getElementById(),    <br/>
     *          if this element is HTMLCanvasElement, set this element as main canvas of engine, and set it's ParentNode as cc.gameDiv.<br/>
     *          if this element is HTMLDivElement, set it's ParentNode to cc.gameDiv， and create a canvas as main canvas of engine.   <br/>
     * </p>
     * @function
     * @example
     * //setup with null
     * cc.setup():void;
     *
     * // setup with HTMLCanvasElement, gameCanvas is Canvas element
     * // declare like this: <canvas id="gameCanvas" width="800" height="450"></canvas>
     * cc.setup("gameCanvas"):void;
     *
     * //setup with HTMLDivElement, gameDiv is Div element
     * // declare like this: <div id="Cocos2dGameContainer" width="800" height="450"></div>
     * cc.setup("Cocos2dGameContainer"):void;
     */
    function setup(el?: string, width?: number, height?: number): void;

    /**
     * Run main loop of game engine
     * @class
     * @extends cc.Class
     */
    export class Application extends Class {
    }
    //#endregion cocos2d/platform/CCApplication.js

    //#region cocos2d/platform/CCClass.js
    export class Class {
    }
    //#endregion cocos2d/platform/CCClass.js

    //#region cocos2d/platform/CCMacro.js
    /**
     * @constant
     * @type Number
     */
    var INVALID_INDEX: number;

    /**
     * PI is the ratio of a circle's circumference to its diameter.
     * @constant
     * @type Number
     */
    var PI: number;

    /**
     * @constant
     * @type Number
     */
    var FLT_MAX: number;

    /**
     * @constant
     * @type Number
     */
    var RAD: number;

    /**
     * @constant
     * @type Number
     */
    var DEG: number;

    /**
     * maximum unsigned int value
     * @constant
     * @type Number
     */
    var UINT_MAX: number;

    /**
     * <p>
     *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
     * </p>
     * @param {Number} a number A
     * @param {Number} b number B
     * @param {Number} r ratio between 0 and 1
     * @function
     * @example
     * cc.lerp(2,10,0.5)//returns 6<br/>
     * cc.lerp(2,10,0.2)//returns 3.6
     */
    function lerp(a: number, b: number, r: number): number;

    /**
     * returns a random float between -1 and 1
     * @return {Number}
     * @function
     */
    function RANDOM_MINUS1_1(): number;

    /**
     * returns a random float between 0 and 1
     * @return {Number}
     * @function
     */
    function RANDOM_0_1(): number;

    /**
     * converts degrees to radians
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function DEGREES_TO_RADIANS(angle: number): void;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function RADIANS_TO_DEGREES(angle: number): void;

    /**
     * @constant
     * @type Number
     */
    var REPEAT_FOREVER: number;

    /**
     * default gl blend src function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    var BLEND_SRC: number;

    /**
     * default gl blend dst function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    var BLEND_DST: number;

    /**
     * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
     * @param {cc.Node} node setup node
     * @function
     */
    function NODE_DRAW_SETUP(node: Node): void;

    /**
     * <p>
     *     GL states that are enabled:<br/>
     *       - GL_TEXTURE_2D<br/>
     *       - GL_VERTEX_ARRAY<br/>
     *       - GL_TEXTURE_COORD_ARRAY<br/>
     *       - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    function ENABLE_DEFAULT_GL_STATES(): void;

    /**
     * <p>
     *   Disable default GL states:<br/>
     *     - GL_TEXTURE_2D<br/>
     *     - GL_TEXTURE_COORD_ARRAY<br/>
     *     - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    function DISABLE_DEFAULT_GL_STATES(): void;

    /**
     * <p>
     *  Increments the GL Draws counts by one.<br/>
     *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.<br/>
     * </p>
     * @param {Number} addNumber
     * @function
     */
    function INCREMENT_GL_DRAWS(addNumber: number): void;

    /**
     * @constant
     * @type Number
     */
    var FLT_EPSILON: number;

    /**
     * <p>
     *     On Mac it returns 1;<br/>
     *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
     * </p>
     * @function
     */
    function CONTENT_SCALE_FACTOR(): number;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Point} points
     * @return {cc.Point}
     * @function
     */
    function POINT_POINTS_TO_PIXELS(points: Point): Point;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Size} sizeInPoints
     * @return {cc.Size}
     * @function
     */
    function SIZE_POINTS_TO_PIXELS(sizeInPoints: Size): Size;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Size} sizeInPixels
     * @return {cc.Size}
     * @function
     */
    function SIZE_PIXELS_TO_POINTS(sizeInPixels: Size): Size;

    /**
     * Converts a rect in pixels to points
     * @param pixels
     * @function
     */
    function POINT_PIXELS_TO_POINTS(pixels: Point): Point;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Rect} pixel
     * @function
     */
    function RECT_PIXELS_TO_POINTS(pixel: Rect): void;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Rect} point
     * @function
     */
    function RECT_POINTS_TO_PIXELS(point: Point): void;
    //#endregion cocos2d/platform/CCMacro.js

    //#region cocos2d/platform/CCTypes.js
    export class Color3B {
        r: number;
        g: number;
        b: number;

        /**
         * RGB color composed of bytes 3 bytes
         * @Class
         * @Construct
         * @param {Number | cc.Color3B} r1 red value (0 to 255) or destination color of new color
         * @param {Number} g1 green value (0 to 255)
         * @param {Number} b1 blue value (0 to 255)
         * @example
         * //create an empty color
         * var color1 = new cc.Color3B():void;
         *
         * //create a red color
         * var redColor = new cc.Color3B(255,0,0):void;
         *
         * //create a new color with color
         * var newColor = new cc.Color3B(redColor):void;
         */
        constructor(r1: any, g1?: number, b1?: number);
    }

    /**
     * RGBA color composed of 4 bytes
     * @Class
     * @Construct
     * @param {Number} r1 red value (0 to 255)
     * @param {Number} g1 green value (0 to 255)
     * @param {Number} b1 blue value (0 to 255)
     * @param {Number} a1 Alpha value (0 to 255)
     * @example
     * //create a red color
     * var redColor = new cc.Color4B(255,0,0,255):void;
     */
    export class Color4B {
        r: number;
        g: number;
        b: number;
        a: number;

        constructor(r1: any, g1: number, b1: number, a1: number);
    }

    /**
     * helper macro that creates an ccColor4B type
     * @function
     * @param {Number} r red value (0 to 255)
     * @param {Number} g green value (0 to 255)
     * @param {Number} b blue value (0 to 255)
     * @param {Number} a Alpha value (0 to 255)
     * @return {Number,Number,Number,Number}
     */
    function c4b(r: number, g: number, b: number, a: number): Color4B;

    /**
     * RGBA color composed of 4 floats
     * @Class
     * @Construct
     * @param {Number} r1 red value (0 to 1)
     * @param {Number} g1 green value (0 to 1)
     * @param {Number} b1 blue value (0 to 1)
     * @param {Number} a1 Alpha value (0 to 1)
     * @example
     * //create a red color
     * var redColor = new cc.Color4F(1,0,0,1):void;
     */
    export class Color4F {
        r: number;
        g: number;
        b: number;
        a: number;

        constructor(r1: number, g1: number, b1: number, a1: number);
    }

    /**
     * helper macro that creates an ccColor4F type
     * @Class
     * @Construct
     * @param {Number} r red value (0 to 1)
     * @param {Number} g green value (0 to 1)
     * @param {Number} b blue value (0 to 1)
     * @param {Number} a Alpha value (0 to 1)
     * @example
     * //create a red color
     * var redColor = cc.c4f(1,0,0,1):void;
     */
    function c4f(r: number, g: number, b: number, a: number): Color4F;

    /**
     * Returns a cc.Color4F from a cc.Color3B. Alpha will be 1.
     * @function
     * @param {cc.Color3B} c color
     * @return {cc.Color4F}
     */
    function c4FFromccc3B(c: Color3B): Color4F;

    /**
     * Returns a cc.Color4F from a cc.Color4B.
     * @function
     * @param {cc.Color4B} c Color
     * @return {cc.Color4F}
     */
    function c4FFromccc4B(c: Color4B): Color4F;

    /**
     * Returns a cc.Color4B from a cc.Color4F.
     * @param {cc.Color4F} c
     * @return {cc.Color4B}
     */
    function c4BFromccc4F(c: Color4F): Color4B;

    /**
     * returns YES if both cc.Color4F are equal. Otherwise it returns NO.
     * @param {cc.Color4F} a color1
     * @param {cc.Color4F} b color2
     * @return {Boolean}
     */
    function c4FEqual(a: Color4F, b: Color4F): boolean;

    /**
     * A vertex composed of 2 floats: x, y
     * @Class
     * @Construct
     * @param {Number} x1
     * @param {Number} y1
     */
    export class Vertex2F {
        x: number;
        y: number;

        constructor(x1?: number, y1?: number);
    }

    /**
     * helper macro that creates an Vertex2F type
     * @function
     * @param {Number} x
     * @param {Number} y
     * @return {cc.Vertex2F}
     */
    function Vertex2(x: number, y: number): Vertex2F;

    /**
     * A vertex composed of 3 floats: x, y, z
     * @Class
     * @Construct
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} z1
     */
    export class Vertex3F {
        x: number;
        y: number;
        z: number;

        constructor(x1?: number, y1?: number, z1?: number);
    }

    /**
     * helper macro that creates an Vertex3F type
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @return {cc.Vertex3F}
     */
    function vertex3(x: number, y: number, z: number): void;

    /**
     * A texcoord composed of 2 floats: u, y
     * @Class
     * @Construct
     * @param {Number} u1
     * @param {Number} v1
     */
    export class Tex2F {
        u: number;
        v: number;

        constructor(u1?: number, v1?: number);
    }

    /**
     * helper macro that creates an Tex2F type
     * @function
     * @param {Number} u
     * @param {Number} v
     * @return {cc.Tex2F}
     */
    function tex2(u: number, v: number): void;

    /**
     * Point Sprite component
     * @Class
     * @Construct
     * @param {cc.Vertex2F} pos1
     * @param {cc.Color4B} color1
     * @param {Number} size1
     */
    export class PointSprite {
        pos: Vertex2F;
        color: Color4B;
        size: number;

        constructor(pos1: Vertex2F, color1: Color4B, size1: number);
    }

    /**
     * A 2D Quad. 4 * 2 floats
     * @Class
     * @Construct
     * @param {cc.Vertex2F} tl1
     * @param {cc.Vertex2F} tr1
     * @param {cc.Vertex2F} bl1
     * @param {cc.Vertex2F} br1
     */
    export class Quad2 {
        tl: Vertex2F;
        tr: Vertex2F;
        bl: Vertex2F;
        br: Vertex2F;

        constructor(tl1?: Vertex2F, tr1?: Vertex2F, bl1?: Vertex2F, br1?: Vertex2F);
    }

    /**
     * A 3D Quad. 4 * 3 floats
     * @Class
     * @Construct
     * @param {cc.Vertex3F} bl1
     * @param {cc.Vertex3F} br1
     * @param {cc.Vertex3F} tl1
     * @param {cc.Vertex3F} tr1
     */
    export class Quad3 {
        bl: Vertex3F;
        br: Vertex3F;
        tl: Vertex3F;
        tr: Vertex3F;

        constructor(bl1?: Vertex3F, br1?: Vertex3F, tl1?: Vertex3F, tr1?: Vertex3F);
    }

    /**
     * text alignment : left
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_LEFT: number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_CENTER: number;

    /**
     * text alignment : right
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_RIGHT: number;

    /**
     * text alignment : top
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_TOP: number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_CENTER: number;

    /**
     * text alignment : bottom
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_BOTTOM: number;

    //#endregion cocos2d/platform/CCTypes.js

    //#region cocos2d/sprite_nodes/CCAnimation.js
    /**
     * <p>
     *    cc.AnimationFrame
     *    A frame of the animation. It contains information like:
     *       - sprite frame name
     *       - # of delay units.
     *       - offset
     * </p>
     * @class
     * @extends cc.Class
     */
    export class AnimationFrame extends Class {

    }

    /**
     * <p>
     *     A cc.Animation object is used to perform animations on the cc.Sprite objects.<br/>
     *     <br/>
     *      The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames. <br/>
     *      You can animate a cc.Animation object by using the cc.Animate action. Example:  <br/>
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //create an animation object
     * var animation = cc.Animation.create():void;
     *
     * //add a sprite frame to this animation
     * animation.addFrameWithFile("grossini_dance_01.png"):void;
     *
     * //create an animate with this animation
     * var action = cc.Animate.create(animation):void;
     *
     * //run animate
     * this._grossini.runAction(action):void;
     */
    export class Animation extends Class {
        /**
         * Creates an animation.
         * @param {Array} frames
         * @param {Number} delay
         * @param {Number} loops
         * @return {cc.Animation}
         * @example
         * //Creates an animation
         * var animation1 = cc.Animation.create():void;
         *
         * //Create an animation with sprite frames
         * var animFrames = [];
         * var frame = cache.getSpriteFrame("grossini_dance_01.png"):void;
         * animFrames.push(frame):void;
         * var animation2 = cc.Animation.create(animFrames):void;
         *
         * //Create an animation with sprite frames and delay
         * var animation3 = cc.Animation.create(animFrames, 0.2):void;
         */
        static create(frames: AnimationFrame[], delay?: number, loops?: number): Animation;

        /**
         * Creates an animation with an array of cc.AnimationFrame, the delay per units in seconds and and how many times it should be executed.
         * @param {Array} arrayOfAnimationFrameNames
         * @param {Number} delayPerUnit
         * @param {Number} loops
         * @return {cc.Animation}
         */
        static createWithAnimationFrames(arrayOfAnimationFrameNames: AnimationFrame[], delayPerUnit: number, loops: number): Animation;
    }
    //#endregion cocos2d/sprite_nodes/CCAnimation.js

    export class AnimationCache {

        /**
         * Adds a cc.Animation with a name.
         * @param {cc.Animation} animation
         * @param {String} name
         */
        addAnimation(animation: Animation, name: string): void;

        /**
         *  Deletes a cc.Animation from the cache.
         * @param  {String} name
         */
        removeAnimation(name): void;
        /**
         * <p>
         *     Returns a cc.Animation that was previously added.<br/>
         *      If the name is not found it will return nil.<br/>
         *      You should retain the returned copy if you are going to use it.</br>
         * </p>
         * @param {String} name
         * @return {cc.Animation}
         */
        getAnimation(name: string): Animation;


        /**
         * <p>
         *    Adds an animation from a plist file.<br/>
         *    Make sure that the frames were previously loaded in the cc.SpriteFrameCache.
         * </p>
         * @param {String} plist
         */
        addAnimations(plist: string): void;
    }

    export var animationCache: AnimationCache;

    //#region cocos2d/sprite_nodes/CCSprite.js
    /**
     * <p>cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) ) (Canvas implement) <br/>
     *
     * cc.Sprite can be created with an image, or with a sub-rectangle of an image.  <br/>
     *
     * If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid   <br/>
     *    - Features when the parent is a cc.BatchNode: <br/>
     *        - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.  <br/>
     *
     *    - Limitations   <br/>
     *        - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)  <br/>
     *        - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl) <br/>
     *        - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.  <br/>
     *        - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property. <br/>
     *        - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.        <br/>
     *
     *  If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:      <br/>
     *    - It supports blending functions    <br/>
     *    - It supports aliasing / antialiasing    <br/>
     *    - But the rendering will be slower: 1 draw per children.   <br/>
     *
     * The default anchorPoint in cc.Sprite is (0.5, 0.5). </p>
     * @class
     * @extends cc.Node
     *
     * @example
     * var aSprite = new cc.Sprite():void;
     * aSprite.initWithFile("HelloHTML5World.png",cc.rect(0,0,480,320)):void;
     */
    export class Sprite extends Node {

        constructor(...args: any[]);
        ctor(...args: any[]);

        /**
         * conforms to cc.TextureProtocol protocol
         * @function
         * @param {Number|cc.BlendFunc} src
         * @param {Number} dst
         */
        setBlendFunc(src: number, dst: number): void;
        setBlendFunc(blendFunc: BlendFunc): void;

        width: number;
        height: number;
        color: Color3B;

        /**
         * Create a sprite with filename and rect
         * @constructs
         * @param {String} fileName
         * @param {cc.Rect} rect
         * @return {cc.Sprite}
         * @example
         * //create a sprite with filename
         * var sprite1 = cc.Sprite.create("HelloHTML5World.png"):void;
         *
         * //create a sprite with filename and rect
         * var sprite2 = cc.Sprite.create("HelloHTML5World.png",cc.rect(0,0,480,320)):void;
         */
        static create(...args: any[]): Sprite;
    }
    //#endregion cocos2d/sprite_nodes/CCSprite.js

    export class BlendFunc {
        src: number;
        dst: number;
    }

    /**
     * @constant
     * @type Number
     */
    export var ONE: number;

    /**
     * @constant
     * @type Number
     */
    export var ZERO: number;

    /**
     * @constant
     * @type Number
     */
    export var SRC_ALPHA: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_SRC_ALPHA: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_DST_COLOR: number;

    //#region cocos2d/touch_dispatcher/CCTouchDelegateProtocol.js
    class Touch extends Class {
    }
    //#endregion cocos2d/touch_dispatcher/CCTouchDelegateProtocol.js

    //#region CocosDension/SimpleAudioEngine.js
    class AudioEngine extends Class {
    }
    export var audioEngine: SimpleAudioEngine;
    /**
     * The Audio Engine implementation via <audio> tag in HTML5.
     * @class
     * @extends   cc.AudioEngine
     */
    class SimpleAudioEngine extends AudioEngine {
        /**
         * Preload music resource.<br />
         * This method is called when cc.Loader preload  resources.
         * @param {String} path The path of the music file with filename extension.
         */
        preloadSound(path: string): void;

        /**
         * Play music.
         * @param {String} path The path of the music file without filename extension.
         * @param {Boolean} loop Whether the music loop or not.
         * @example
         * //example
         * cc.AudioEngine.getInstance().playMusic(path, false):void;
         */
        playMusic(path: string, loop?: boolean): void;

        /**
         * Stop playing music.
         * @param {Boolean} releaseData If release the music data or not.As default value is false.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopMusic():void;
         */
        stopMusic(releaseData?: boolean): void;

        /**
         * Pause playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseMusic():void;
         */
        pauseMusic(): void;

        /**
         * Resume playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().resumeMusic():void;
         */
        resumeMusic(): void;

        /**
         * Rewind playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().rewindMusic():void;
         */
        rewindMusic(): void;

        /**
         * The volume of the music max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var volume = cc.AudioEngine.getInstance().getMusicVolume():void;
         */
        getMusicVolume(): number;

        /**
         * Set the volume of music.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.AudioEngine.getInstance().setMusicVolume(0.5):void;
         */
        setMusicVolume(volume: number): void;

        /**
         * Whether the music is playing.
         * @return {Boolean} If is playing return true,or return false.
         * @example
         * //example
         *  if (cc.AudioEngine.getInstance().isMusicPlaying()) {
         *      cc.log("music is playing"):void;
         *  }
         *  else {
         *      cc.log("music is not playing"):void;
         *  }
         */
        isMusicPlaying(): boolean;

        /**
         * Play sound effect.
         * @param {String} path The path of the sound effect with filename extension.
         * @param {Boolean} loop Whether to loop the effect playing, default value is false
         * @example
         * //example
         * var soundId = cc.AudioEngine.getInstance().playEffect(path):void;
         */
        playEffect(path: string, loop?: boolean): number;

        /**
         *The volume of the effects max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var effectVolume = cc.AudioEngine.getInstance().getEffectsVolume():void;
         */
        getEffectsVolume(): number;

        /**
         * Set the volume of sound effecs.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.AudioEngine.getInstance().setEffectsVolume(0.5):void;
         */
        setEffectsVolume(volume: number): void;

        /**
         * Pause playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseEffect(audioID):void;
         */
        pauseEffect(audioID: number): void;

        /**
         * Pause all playing sound effect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseAllEffects():void;
         */
        pauseAllEffects(): void;

        /**
         * Resume playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @audioID
         * //example
         * cc.AudioEngine.getInstance().resumeEffect(audioID):void;
         */
        resumeEffect(audioID: number): void;

        /**
         * Resume all playing sound effect
         * @example
         * //example
         * cc.AudioEngine.getInstance().resumeAllEffects():void;
         */
        resumeAllEffects(): void;

        /**
         * Stop playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopEffect(audioID):void;
         */
        stopEffect(audioID: number): void;

        /**
         * Stop all playing sound effects.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopAllEffects():void;
         */
        stopAllEffects(): void;

        /**
         * Unload the preloaded effect from internal buffer
         * @param {String} path
         * @example
         * //example
         * cc.AudioEngine.getInstance().unloadEffect(EFFECT_FILE):void;
         */
        unloadEffect(path: string): void;

        /**
         * search in this._supportedFormat if @param ext is there
         * @param {String} ext
         * @returns {Boolean}
         */
        isFormatSupported(ext: string): boolean;
    }
    //#endregion CocosDension/SimpleAudioEngine.js
    class Game {

        /**
         * Config of game
         * @type Object
         */
        config: Object;

        /**
         * Callback when the scripts of engine have been load.
         * @type Function
         */
        onStart: Object;

        /**
         * Callback when game exits.
         * @type Function
         */
        onStop: Object;

        /**
         * Set frameRate of game.
         * @param frameRate
         */
        setFrameRate(frameRate: number): void;

        /**
         * Run game.
         */
        run(): void;

        /**
         * Prepare game.
         * @param cb
         */
        prepare(cb): void;
    }

    export var game: Game;


    class EGLView extends Class {
        ctor(): void;

        resizeWithBrowserSize(enabled: boolean): void;

        setResizeCallback(callback: Function): void;

        /**
         * init
         */
        initialize(): void;

        adjustViewPort(enabled: boolean): void;

        /**
         * Retina support is enabled by default for Apple device but disabled for other devices,
         * it takes effect only when you called setDesignResolutionPolicy
         * @param {Boolean} enabled  Enable or disable retina display
         */
        enableRetina(enabled: boolean): void;

        /**
         * Check whether retina display is enabled.
         * @return {Boolean}
         */
        isRetinaEnabled(): boolean;

        /**
         * Force destroying EGL view, subclass must implement this method.
         */
        end(): void;

        /**
         * Get whether render system is ready(no matter opengl or canvas),
         * this name is for the compatibility with cocos2d-x, subclass must implement this method.
         * @return {Boolean}
         */
        isOpenGLReady(): boolean;

        /*
         * Set zoom factor for frame. This method is for debugging big resolution (e.g.new ipad) app on desktop.
         * @param {Number} zoomFactor
         */
        setFrameZoomFactor(zoomFactor: number): void;

        /**
         * Exchanges the front and back buffers, subclass must implement this method.
         */
        swapBuffers(): void;

        /**
         * Open or close IME keyboard , subclass must implement this method.
         */
        setIMEKeyboardState(isOpen: boolean): void;

        /**
         * <p>
         *   The resolution translate on EGLView
         * </p>
         * @param {Number} offsetLeft
         * @param {Number} offsetTop
         */
        setContentTranslateLeftTop(offsetLeft: number, offsetTop: number): void;

        /**
         * <p>
         *   get the resolution translate on EGLView
         * </p>
         * @return {cc.Size|Object}
         */
        getContentTranslateLeftTop(): Size;
        /**
         * Get the frame size of EGL view.
         * In general, it returns the screen size since the EGL view is a fullscreen view.
         * @return {cc.Size}
         */
        getFrameSize(): Size;

        /**
         * Set the frame size of EGL view.
         * @param {Number} width
         * @param {Number} height
         */
        setFrameSize(width: number, height: number): void;

        centerWindow(): void;

        /**
         * Get the visible area size of OpenGL view port.
         * @return {cc.Size}
         */
        getVisibleSize(): Size;

        /**
         * Get the visible origin of OpenGL view port.
         * @return {cc.Point}
         */
        getVisibleOrigin(): Point;

        canSetContentScaleFactor(): boolean;

        /**
         * Get the current resolution policy
         * @return {cc.ResolutionPolicy}
         */
        getResolutionPolicy(): ResolutionPolicy;

        /**
         * Set the current resolution policy
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy
         */
        setResolutionPolicy(resolutionPolicy: number): void;
        setResolutionPolicy(resolutionPolicy: ResolutionPolicy): void;

        /**
         * Set the design resolution size.
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired, you may choose:
         * [1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.
         * [2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.
         * [3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.
         * [4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width
         * [5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height
         * [cc.ResolutionPolicy]        Custom resolution policy, constructed by cc.ResolutionPolicy
         */
        setDesignResolutionSize(width: number, height: number, resolutionPolicy: number): void;
        setDesignResolutionSize(width: number, height: number, resolutionPolicy: ResolutionPolicy): void;

        /**
         * Get design resolution size.
         * Default resolution size is the same as 'getFrameSize'.
         * @return {cc.Size}
         */
        getDesignResolutionSize(): Size;

        /**
         * Set opengl view port rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w width
         * @param {Number} h height
         */
        setViewPortInPoints(x: number, y: number, w: number, h: number): void;

        /**
         * Set Scissor rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w
         * @param {Number} h
         */
        setScissorInPoints(x: number, y: number, w: number, h: number): void;

        /**
         * Get whether GL_SCISSOR_TEST is enable
         */
        isScissorEnabled(): boolean;
        /**
         * Get the current scissor rectangle
         * @return {cc.Rect}
         */
        getScissorRect(): Rect;

        /**
         * @param {String} viewName
         */
        setViewName(viewName: string): void;

        /**
         * get view name
         * @return {String}
         */
        getViewName(): string;

        /**
         * Get the opengl view port rectangle.
         */
        getViewPortRect(): Rect;

        /**
         * Get scale factor of the horizontal direction.
         */
        getScaleX(): number;

        /**
         * Get scale factor of the vertical direction.
         */
        getScaleY(): number;

        /**
         * Get device pixel ratio for retina display.
         */
        getDevicePixelRatio(): number;

        /**
         * Get the real location in view
         */
        convertToLocationInView(tx: number, ty: number, relatedPos: Point): Point;
    }

    export var view: EGLView;

    export class ResolutionPolicy {
        ctor(containerStg, contentStg): void;
        /**
         * Manipulation before applying the resolution policy
         * @param {cc.view} view The target view
         */
        preApply(view: EGLView): void;

        /**
         * Function to apply this resolution policy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}}
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @param {cc.view} view The target view
         * @param {cc.Size} designedResolution The user defined design resolution
         * @return {object} An object contains the scale X/Y values and the viewport rect
         */
        apply(view: EGLView, designedResolution: Size): Object;

        /**
         * Manipulation after appyling the strategy
         * @param {cc.view} view The target view
         */
        postApply(view: EGLView): void;

        /**
         * Setup the container's scale strategy
         * @param {cc.ContainerStrategy} containerStg
         */
        setContainerStrategy(containerStg: ContainerStrategy): void;

        /**
         * Setup the content's scale strategy
         * @param {cc.ContentStrategy} contentStg
         */
        setContentStrategy(contentStg: ContentStrategy): void;

        /*
 * @memberOf cc.ResolutionPolicy#
 * @name EXACT_FIT
 * @const
 * @static
 * The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
 * Distortion can occur, and the application may appear stretched or compressed.
 */
        static EXACT_FIT: number;

        /*
         * @memberOf cc.ResolutionPolicy#
         * @name NO_BORDER
         * @const
         * @static
         * The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
         * while maintaining the original aspect ratio of the application.
         */
        static NO_BORDER: number;

        /*
         * @memberOf cc.ResolutionPolicy#
         * @name SHOW_ALL
         * @const
         * @static
         * The entire application is visible in the specified area without distortion while maintaining the original<br/>
         * aspect ratio of the application. Borders can appear on two sides of the application.
         */
        static SHOW_ALL: number;

        /*
         * @memberOf cc.ResolutionPolicy#
         * @name FIXED_HEIGHT
         * @const
         * @static
         * The application takes the height of the design resolution size and modifies the width of the internal<br/>
         * canvas so that it fits the aspect ratio of the device<br/>
         * no distortion will occur however you must make sure your application works on different<br/>
         * aspect ratios
         */
        static FIXED_HEIGHT: number;

        /*
         * @memberOf cc.ResolutionPolicy#
         * @name FIXED_WIDTH
         * @const
         * @static
         * The application takes the width of the design resolution size and modifies the height of the internal<br/>
         * canvas so that it fits the aspect ratio of the device<br/>
         * no distortion will occur however you must make sure your application works on different<br/>
         * aspect ratios
         */
        static FIXED_WIDTH: number;

        /*
         * @memberOf cc.ResolutionPolicy#
         * @name UNKNOWN
         * @const
         * @static
         * Unknow policy
         */
        static UNKNOWN: number;
    }

    export enum ContentStrategy {
    }

    export enum ContainerStrategy {
    }

    export class SpriteFrameCache extends Class {

        /**
         * <p>
         *   Adds multiple Sprite Frames from a plist or json file.<br/>
         *   A texture will be loaded automatically. The texture name will composed by replacing the .plist or .json suffix with .png<br/>
         *   If you want to use another texture, you should use the addSpriteFrames:texture method.<br/>
         * </p>
         * @param {String} url file path
         * @param {HTMLImageElement|cc.Texture2D|string} texture
         * @example
         * // add SpriteFrames to SpriteFrameCache With File
         * cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);
         * cc.spriteFrameCache.addSpriteFrames(s_grossiniJson);
         */
        addSpriteFrames(url: string, texture?: Texture2D): void;
        addSpriteFrames(url: string, texture?: string): void;

        /**
         * <p>
         *  Adds an sprite frame with a given name.<br/>
         *  If the name already exists, then the contents of the old name will be replaced with the new one.
         * </p>
         * @param {cc.SpriteFrame} frame
         * @param {String} frameName
         */
        addSpriteFrame(frame: SpriteFrame, frameName: string): void;

        /**
         * <p>
         *   Purges the dictionary of loaded sprite frames.<br/>
         *   Call this method if you receive the "Memory Warning".<br/>
         *   In the short term: it will free some resources preventing your app from being killed.<br/>
         *   In the medium term: it will allocate more resources.<br/>
         *   In the long term: it will be the same.<br/>
         * </p>
         */
        removeSpriteFrames(): void;

        /**
         * Deletes an sprite frame from the sprite frame cache.
         * @param {String} name
         */
        removeSpriteFrameByName(name: string): void;

        /**
         * <p>
         *     Removes multiple Sprite Frames from a plist file.<br/>
         *     Sprite Frames stored in this file will be removed.<br/>
         *     It is convinient to call this method when a specific texture needs to be removed.<br/>
         * </p>
         * @param {String} url plist filename
         */
        removeSpriteFramesFromFile(url: string): void;

        /**
         * <p>
         *    Removes all Sprite Frames associated with the specified textures.<br/>
         *    It is convinient to call this method when a specific texture needs to be removed.
         * </p>
         * @param {HTMLImageElement|HTMLCanvasElement|cc.Texture2D} texture
         */
        removeSpriteFramesFromTexture(texture: Texture2D): void;

        /**
         * <p>
         *   Returns an Sprite Frame that was previously added.<br/>
         *   If the name is not found it will return nil.<br/>
         *   You should retain the returned copy if you are going to use it.<br/>
         * </p>
         * @param {String} name name of SpriteFrame
         * @return {cc.SpriteFrame}
         * @example
         * //get a SpriteFrame by name
         * var frame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
         */
        getSpriteFrame(name: string): SpriteFrame;
    }
    export var spriteFrameCache: SpriteFrameCache;

    class SpriteFrame {
    }

    class Texture2D {
    }

    export function assert(exp: any, msg: string): void;

    /**
     * Instant actions are immediate actions. They don't have a duration like
     * the CCIntervalAction actions.
     * @class
     * @extends cc.FiniteTimeAction
     */
    class ActionInstant extends FiniteTimeAction {

    }

    export class CallFunc extends ActionInstant {

        static create(selector: any, selectorTarget?: any, data?: any): CallFunc;
    }

    export class TextureCache {
        handleLoadedTexture(url: string): void;

        /**
         * <p>
         *     Returns a Texture2D object given an PVR filename                                                              <br/>
         *     If the file image was not previously loaded, it will create a new CCTexture2D                                 <br/>
         *     object and it will return it. Otherwise it will return a reference of a previously loaded image              <br/>
         *     note: AddPVRTCImage does not support on HTML5
         * </p>
         * @param {String} filename
         * @return {cc.Texture2D}
         */
        addPVRTCImage(filename: string): Texture2D;


        /**
         * <p>
         *     Returns a Texture2D object given an ETC filename                                                               <br/>
         *     If the file image was not previously loaded, it will create a new CCTexture2D                                  <br/>
         *     object and it will return it. Otherwise it will return a reference of a previously loaded image                <br/>
         *    note:addETCImage does not support on HTML5
         * </p>
         * @param {String} filename
         * @return {cc.Texture2D}
         */
        addETCImage(filename: string): Texture2D;

        /**
         * Description
         * @return {String}
         */
        description(): string;

        /**
         * Returns an already created texture. Returns null if the texture doesn't exist.
         * @param {String} textureKeyName
         * @return {cc.Texture2D|Null}
         * @example
         * //example
         * var key = cc.textureCache.textureForKey("hello.png");
         */
        textureForKey(textureKeyName: string): Texture2D;

        /**
         * @param {Image} texture
         * @return {String|Null}
         * @example
         * //example
         * var key = cc.textureCache.getKeyByTexture(texture);
         */
        getKeyByTexture(texture: Image): string;


        /**
         * <p>Returns a Texture2D object given an PVR filename<br />
         * If the file image was not previously loaded, it will create a new Texture2D<br />
         *  object and it will return it. Otherwise it will return a reference of a previously loaded image </p>
         * @param {String} path
         * @return {cc.Texture2D}
         */
        addPVRImage(path: string): Texture2D;

        /**
         * <p>Purges the dictionary of loaded textures. <br />
         * Call this method if you receive the "Memory Warning"  <br />
         * In the short term: it will free some resources preventing your app from being killed  <br />
         * In the medium term: it will allocate more resources <br />
         * In the long term: it will be the same</p>
         * @example
         * //example
         * cc.textureCache.removeAllTextures();
         */
        removeAllTextures(): void;

        /**
         * Deletes a texture from the cache given a texture
         * @param {Image} texture
         * @example
         * //example
         * cc.textureCache.removeTexture(texture);
         */
        removeTexture(texture: Image): void;

        /**
         * Deletes a texture from the cache given a its key name
         * @param {String} textureKeyName
         * @example
         * //example
         * cc.textureCache.removeTexture("hello.png");
         */
        removeTextureForKey(textureKeyName: string): void;

        /**
         * <p>Returns a Texture2D object given an file image <br />
         * If the file image was not previously loaded, it will create a new Texture2D <br />
         *  object and it will return it. It will use the filename as a key.<br />
         * Otherwise it will return a reference of a previously loaded image. <br />
         * Supported image extensions: .png, .jpg, .gif</p>
         * @param {String} url
         * @return {cc.Texture2D}
         * @example
         * //example
         * cc.textureCache.addImage("hello.png");
         */
        addImage(url: string, target?: any, cb?: any): Texture2D;

        /**
         *  Cache the image data
         * @param {String} path
         * @param {Image|HTMLImageElement|HTMLCanvasElement} texture
         */
        cacheImage(path: string, texture: Image): void;

        /**
         * <p>Output to cc.log the current contents of this TextureCache <br />
         * This will attempt to calculate the size of each texture, and the total texture memory in use. </p>
         */
        dumpCachedTextureInfo(): void;
    }

    export var textureCache: TextureCache;

    class Image { }


    export class KEY {
        static backspace: number;
        static tab: number;
        static enter: number;
        static shift: number; //should use shiftkey instead
        static ctrl: number; //should use ctrlkey
        static alt: number; //should use altkey
        static pause: number;
        static capslock: number;
        static escape: number;
        static pageup: number;
        static pagedown: number;
        static end: number;
        static home: number;
        static left: number;
        static up: number;
        static right: number;
        static down: number;
        static insert: number;
        static Delete: number;
        static 0: number;
        static 1: number;
        static 2: number;
        static 3: number;
        static 4: number;
        static 5: number;
        static 6: number;
        static 7: number;
        static 8: number;
        static 9: number;
        static a: number;
        static b: number;
        static c: number;
        static d: number;
        static e: number;
        static f: number;
        static g: number;
        static h: number;
        static i: number;
        static j: number;
        static k: number;
        static l: number;
        static m: number;
        static n: number;
        static o: number;
        static p: number;
        static q: number;
        static r: number;
        static s: number;
        static t: number;
        static u: number;
        static v: number;
        static w: number;
        static x: number;
        static y: number;
        static z: number;
        static num0: number;
        static num1: number;
        static num2: number;
        static num3: number;
        static num4: number;
        static num5: number;
        static num6: number;
        static num7: number;
        static num8: number;
        static num9: number;
        static '*': number;
        static '+': number;
        static '-': number;
        static 'numdel': number;
        static '/': number;
        static f1: number; //f1-f12 dont work on ie
        static f2: number;
        static f3: number;
        static f4: number;
        static f5: number;
        static f6: number;
        static f7: number;
        static f8: number;
        static f9: number;
        static f10: number;
        static f11: number;
        static f12: number;
        static numlock: number;
        static scrolllock: number;
        static semicolon: number;
        static ',': number;
        static equal: number;
        static '=': number;
        static ':number': number;
        static comma: number;
        static dash: number;
        static '.': number;
        static period: number;
        static forwardslash: number;
        static grave: number;
        static '[': number;
        static openbracket: number;
        static ']': number;
        static closebracket: number;
        static backslash: number;
        static quote: number;
        static space: number;
    }

    export class ActionEase extends ActionInterval {
        static create(action: ActionInterval): ActionEase;
    }

    export class EaseSineOut extends ActionEase {
        static create(action: ActionInterval): EaseSineOut;
    }

    export class EaseSineIn extends ActionEase {
        static create(action: ActionInterval): EaseSineIn;
    }

    export class EaseExponentialOut extends ActionEase {
        static create(action: ActionInterval): EaseExponentialOut;
    }

    export class SpriteBatchNode extends Node {
        // property
        /**
         * Return TextureAtlas of cc.SpriteBatchNode
         * @return {cc.TextureAtlas}
         */
        getTextureAtlas(): TextureAtlas;

        /**
         * TextureAtlas of cc.SpriteBatchNode setter
         * @param {cc.TextureAtlas} textureAtlas
         */
        setTextureAtlas(textureAtlas: TextureAtlas): void;

        static create(texture: Texture2D): SpriteBatchNode;
    }

    export class TextureAtlas { }

    export function color(r: number, g: number, b: number, a?: number): Color4B;


    export class EventManager {
        //Priority dirty flag
        static DIRTY_NONE: number;
        static DIRTY_FIXED_PRIORITY: number;
        static DIRTY_SCENE_GRAPH_PRIORITY: number;
        static DIRTY_ALL: number;

        /**
         * Pauses all listeners which are associated the specified target.
         * @param {cc.Node} node
         * @param {Boolean} [recursive=false]
         */
        pauseTarget(node: Node, recursive: boolean): void;

        /**
         * Resumes all listeners which are associated the specified target.
         * @param {cc.Node} node
         * @param {Boolean} [recursive=false]
         */
        resumeTarget(node: Node, recursive: boolean): void;
        /**
         * <p>
         * Adds a event listener for a specified event.                                                                                                            <br/>
         * if the parameter "nodeOrPriority" is a node, it means to add a event listener for a specified event with the priority of scene graph.                   <br/>
         * if the parameter "nodeOrPriority" is a Number, it means to add a event listener for a specified event with the fixed priority.                          <br/>
         * </p>
         * @param {cc.EventListener|Object} listener The listener of a specified event or a object of some event parameters.
         * @param {cc.Node|Number} nodeOrPriority The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener.
         * @note  The priority of scene graph will be fixed value 0. So the order of listener item in the vector will be ' <0, scene graph (0 priority), >0'.
         *         A lower priority will be called before the ones that have a higher value. 0 priority is forbidden for fixed priority since it's used for scene graph based priority.
         *         The listener must be a cc.EventListener object when adding a fixed priority listener, because we can't remove a fixed priority listener without the listener handler,
         *         except calls removeAllListeners().
         */
        addListener(listener, nodeOrPriority): void;

        /**
         * Adds a Custom event listener. It will use a fixed priority of 1.
         * @param {string} eventName
         * @param {function} callback
         * @return {cc.EventListener} the generated event. Needed in order to remove the event from the dispatcher
         */
        addCustomListener(eventName, callback): EventListener;

        /**
         * Remove a listener
         * @param {cc.EventListener} listener an event listener or a registered node target
         */
        removeListener(listener: EventListener): void;

        /**
         * Removes all listeners with the same event listener type or removes all listeners of a node
         * @param {Number|cc.Node} listenerType or a node
         * @param {Boolean} [recursive=false]
         */

        removeListeners(listenerType: number, recursive?: boolean): void;
        removeListeners(listenerType: Node, recursive?: boolean): void;

        /**
         * Removes all custom listeners with the same event name
         * @param {string} customEventName
         */
        removeCustomListeners(customEventName): void;

        /**
         * Removes all listeners
         */
        removeAllListeners(): void;

        /**
         * Sets listener's priority with fixed value.
         * @param {cc.EventListener} listener
         * @param {Number} fixedPriority
         */
        setPriority(listener, fixedPriority): void;

        /**
         * Whether to enable dispatching events
         * @param {boolean} enabled
         */
        setEnabled(enabled: boolean): void;

        /**
         * Checks whether dispatching events is enabled
         * @returns {boolean}
         */
        isEnabled(): boolean;

        /**
         * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
         * @param {cc.Event} event
         */
        dispatchEvent(event): void;

        /**
         * Dispatches a Custom Event with a event name an optional user data
         * @param {string} eventName
         * @param {*} optionalUserData
         */
        dispatchCustomEvent(eventName, optionalUserData): void;
    }

    export var eventManager: EventManager;

    export class EventListener extends Class {

        ctor(type, listenerID, callback): void;

        /**
         * Checks whether the listener is available.
         * @returns {boolean}
         */
        checkAvailable(): boolean;

        /**
         * Clones the listener, its subclasses have to override this method.
         * @returns {cc.EventListener}
         */
        clone(): EventListener;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         */
        retain(): void;
        release(): void;


        static UNKNOWN: number;
        static TOUCH_ONE_BY_ONE: number;
        static TOUCH_ALL_AT_ONCE: number;
        static KEYBOARD: number;
        static MOUSE: number;
        static ACCELERATION: number;
        static CUSTOM: number;

    }

    export var POINT_EPSILON: number;

    /**
     * Returns opposite of point.
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    export function pNeg(point: Point): Point;

    /**
     * Calculates sum of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    export function pAdd(v1: Point, v2: Point): Point;

    /**
     * Calculates difference of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    export function pSub(v1: Point, v2: Point): Point;

    /**
     * Returns point multiplied by given factor.
     * @param {cc.Point} point
     * @param {Number} floatVar
     * @return {cc.Point}
     */
    export function pMult(point: Point, floatVar: number): Point;

    /**
     * Calculates midpoint between two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.pMult}
     */
    export function pMidpoint(v1: Point, v2: Point): Point;

    /**
     * Calculates dot product of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {Number}
     */
    export function pDot(v1: Point, v2: Point): number;

    /**
     * Calculates cross product of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {Number}
     */
    export function pCross(v1: Point, v2: Point): number;

    /**
     * Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) >= 0
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    export function pPerp(point: Point): Point;

    /**
     * Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) <= 0
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    export function pRPerp(point: Point): Point;

    /**
     * Calculates the projection of v1 over v2.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.pMult}
     */
    export function pProject(v1: Point, v2: Point): Point;

    /**
     * Rotates two points.
     * @param  {cc.Point} v1
     * @param  {cc.Point} v2
     * @return {cc.Point}
     */
    export function pRotate(v1: Point, v2: Point): Point;

    /**
     * Unrotates two points.
     * @param  {cc.Point} v1
     * @param  {cc.Point} v2
     * @return {cc.Point}
     */
    export function pUnrotate(v1: Point, v2: Point): Point;

    /**
     * Calculates the square length of a cc.Point (not calling sqrt() )
     * @param  {cc.Point} v
     *@return {Number}
     */
    export function pLengthSQ(v: Point): number;

    /**
     * Calculates the square distance between two points (not calling sqrt() )
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {Number}
     */
    export function pDistanceSQ(point1: Point, point2: Point): number;

    /**
     * Calculates distance between point an origin
     * @param  {cc.Point} v
     * @return {Number}
     */
    export function pLength(v: Point): number;

    /**
     * Calculates the distance between two points
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.pLength}
     */
    export function pDistance(v1: Point, v2: Point): number;

    /**
     * Returns point multiplied to a length of 1.
     * @param {cc.Point} v
     * @return {cc.Point}
     */
    export function pNormalize(v: Point): Point;

    /**
     * Converts radians to a normalized vector.
     * @param {Number} a
     * @return {cc.Point}
     */
    export function pForAngle(a: number): Point;

    /**
     * Converts a vector to radians.
     * @param {cc.Point} v
     * @return {Number}
     */
    export function pToAngle(v: Point): number;

    /**
     * Clamp a value between from and to.
     * @param {Number} value
     * @param {Number} min_inclusive
     * @param {Number} max_inclusive
     * @return {Number}
     */
    export function clampf(value: number, min_inclusive: number, max_inclusive: number): number;

    /**
     * Clamp a point between from and to.
     * @param {Point} p
     * @param {Number} min_inclusive
     * @param {Number} max_inclusive
     * @return {cc.Point}
     */
    export function pClamp(p: Point, min_inclusive: Point, max_inclusive: Point): Point;

    /**
     * Quickly convert cc.Size to a cc.Point
     * @param {cc.Size} s
     * @return {cc.Point}
     */
    export function pFromSize(s: Size): Point;

    /**
     * Run a math operation function on each point component <br />
     * Math.abs, Math.fllor, Math.ceil, Math.round.
     * @param {cc.Point} p
     * @param {Function} opFunc
     * @return {cc.Point}
     * @example
     * //For example: let's try to take the floor of x,y
     * var p = cc.pCompOp(cc.p(10,10),Math.abs);
     */
    export function pCompOp(p: Point, opFunc): Point;

    /**
     * Linear Interpolation between two points a and b
     * alpha == 0 ? a
     * alpha == 1 ? b
     * otherwise a value between a..b
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @param {Number} alpha
     * @return {cc.pAdd}
     */
    export function pLerp(a: Point, b: Point, alpha: number);

    /**
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @param {Number} variance
     * @return {Boolean} if points have fuzzy equality which means equal with some degree of variance.
     */
    export function pFuzzyEqual(a: Point, b: Point, variance: number): boolean;

    /**
     * Multiplies a nd b components, a.x*b.x, a.y*b.y
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @return {cc.Point}
     */
    export function pCompMult(a: Point, b: Point): Point;
    /**
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @return {Number} the signed angle in radians between two vector directions
     */
    export function pAngleSigned(a: Point, b: Point): number;

    /**
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @return {Number} the angle in radians between two vector directions
     */
    export function pAngle(a: Point, b: Point): number;

    /**
     * Rotates a point counter clockwise by the angle around a pivot
     * @param {cc.Point} v v is the point to rotate
     * @param {cc.Point} pivot pivot is the pivot, naturally
     * @param {Number} angle angle is the angle of rotation cw in radians
     * @return {cc.Point} the rotated point
     */
    export function pRotateByAngle(v: Point, pivot: Point, angle: number): Point;

    /**
     * A general line-line intersection test
     * @param {cc.Point} A A is the startpoint for the first line P1 = (p1 - p2).
     * @param {cc.Point} B B is the endpoint for the first line P1 = (p1 - p2).
     * @param {cc.Point} C C is the startpoint for the second line P2 = (p3 - p4).
     * @param {cc.Point} D D is the endpoint for the second line P2 = (p3 - p4).
     * @param {cc.Point} retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)), <br />
     * retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)).
     * @return {Boolean}
     * indicating successful intersection of a line<br />
     * note that to truly test intersection for segments we have to make<br />
     * sure that s & t lie within [0..1] and for rays, make sure s & t > 0<br />
     * the hit point is        p3 + t * (p4 - p3);<br />
     * the hit point also is    p1 + s * (p2 - p1);
     */
    export function pLineIntersect(A: Point, B: Point, C: Point, D: Point, retP: Point): void;

    /**
     * ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D.
     * @param {cc.Point} A
     * @param {cc.Point} B
     * @param {cc.Point} C
     * @param {cc.Point} D
     * @return {Boolean}
     */
    export function pSegmentIntersect(A: Point, B: Point, C: Point, D: Point): boolean;

    /**
     * ccpIntersectPoint return the intersection point of line A-B, C-D
     * @param {cc.Point} A
     * @param {cc.Point} B
     * @param {cc.Point} C
     * @param {cc.Point} D
     * @return {cc.Point}
     */
    export function pIntersectPoint(A: Point, B: Point, C: Point, D: Point): Point;

    /**
     * check to see if both points are equal
     * @param {cc.Point} A A ccp a
     * @param {cc.Point} B B ccp b to be compared
     * @return {Boolean} the true if both ccp are same
     */
    export function pSameAs(A: Point, B: Point): boolean;



    // High Perfomance In Place Operationrs ---------------------------------------

    /**
      * sets the position of the point to 0
      */
    export function pZeroIn(v): void;

    /**
      * copies the position of one point to another
      */
    export function pIn(v1: Point, v2: Point): void;
    /**
      * multiplies the point with the given factor (inplace)
      */
    export function pMultIn(point: Point, floatVar: number): void;

    /**
      * subtracts one point from another (inplace)
      */
    export function pSubIn(v1: Point, v2: Point): void;

    /**
      * adds one point to another (inplace)
      */
    export function pAddIn(v1: Point, v2: Point): void;

    /**
      * normalizes the point (inplace)
      */
    export function pNormalizeIn(v: Point): void;


    export class LabelBMFont extends SpriteBatchNode {
        static create(...args: any[]);
    }

    export class Show extends ActionInstant {
        static create(): Show;
    }

    export class Hide extends ActionInstant {
        static create(): Hide;
    }

    export class ToggleVisibility extends ActionInstant {
        static create(): ToggleVisibility;
    }

    export class EaseBounce extends ActionEase {
        static create(action: Action): EaseBounce;
    }

    export class EaseBounceIn extends EaseBounce {
        static create(action: Action): EaseBounceIn;
    }

    export class EaseBounceOut extends EaseBounce {
        static create(action: Action): EaseBounceIn;
    }

    export class EaseBounceInOut extends EaseBounce {
        static create(action: Action): EaseBounceInOut;
    }

    /** N/A in cocos2d-html5 */
    export module sys {
        var isNative: boolean;
        var platform: string;
        var capabilities: any;

        function garbageCollect(): void;

        // Dumps rooted objects
        function dumpRoot(): void;

        // restarts the JS VM
        function restartVM(): void;
    }

}
