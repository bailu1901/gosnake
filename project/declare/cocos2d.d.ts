declare module cc {
    //--------------------------------------------------------
    //
    // POINT
    //
    //--------------------------------------------------------
    /**
     * @class
     * @param {Number} x
     * @param {Number} y
     * Constructor
     */
    interface Point{
        constructor(x: number, y: number);
    }

    /**
     * Helper macro that creates a cc.Point.
     * @param {Number|cc.Point} x a Number or a size object
     * @param {Number} y
     * @return {cc.Point}
     * @example
     * var point1 = cc.p();
     * var point2 = cc.p(100,100,100,100);
     * var point3 = cc.p(point2);
     */
    function p(x: number, y: number) : Point;

    /**
     * @function
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {Boolean}
     */
    function pointEqualToPoint(point1: Point, point2: Point): boolean;


    //--------------------------------------------------------
    //
    // SIZE
    //
    //--------------------------------------------------------

    /**
     * @class
     * @param {Number} width
     * @param {Number} height
     * Constructor
     */
    interface Size{
        constructor(width: number, height: number);
    }

    /**
     * @function
     * @param {Number|cc.Size} w width or a size object
     * @param {Number} h height
     * @return {cc.Size}
     * @example
     * var size1 = cc.size();
     * var size2 = cc.size(100,100,100,100);
     * var size3 = cc.size(size2);
     */
    function size(w: number, h: number): Size;
    function size(s:Size): Size;
    function size(): Size;

    /**
     * @function
     * @param {cc.Size} size1
     * @param {cc.Size} size2
     * @return {Boolean}
     */
    function sizeEqualToSize(size1: Size, size2: Size): boolean;


    //--------------------------------------------------------
    //
    // RECT
    //
    //--------------------------------------------------------

    /**
     * @class
     * @param {Number} x a Number value as x
     * @param {Number} y  a Number value as y
     * @param {Number} width
     * @param {Number} height
     * Constructor
     */
    interface Rect {
        constructor(x: number, y: number, width: number, height: number);
    }

    /**
     * Return a new Rect
     * @param {Number|cc.Rect} x a number or a rect object
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @returns {cc.Rect}
     * @example
     * var rect1 = cc.rect();
     * var rect2 = cc.rect(100,100,100,100);
     * var rect3 = cc.rect(rect2);
     */
    function rect(x: number, y: number, w: number, h: number): Rect;
    function rect(r: Rect): Rect;

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
    function rectGetMidX(rect: Rect): number;
    /**
     * return the leftmost x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMinX(rect: Rect): number;

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
    function rectGetMinY(rect: Rect): number;

    /**
     * @function
     * @param {cc.Rect} rect
     * @param {cc.Point} point
     * @return {Boolean}
     */
    function rectContainsPoint(rect: Rect, point: Point): boolean;

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


    interface Node {

        /**
         * Initializes the instance of cc.Node
         * @returns {boolean} Whether the initialization was successful.
         */
        init(): boolean;

        /**
         *  <p>Properties configuration function </br>
         *  All properties in attrs will be set to the node, </br>
         *  when the setter of the node is available, </br>
         *  the property will be set via setter function.</br>
         *  </p>
         * @param {Object} attrs Properties to be set to node
         */
        attr(attrs): void ;

        /**
         *  <p>get the skew degrees in X </br>
         *  The X skew angle of the node in degrees.  <br/>
         *  This angle describes the shear distortion in the X direction.<br/>
         *  Thus, it is the angle between the Y axis and the left edge of the shape </br>
         *  The default skewX angle is 0. Positive values distort the node in a CW direction.</br>
         *  </p>
         * @return {Number} The X skew angle of the node in degrees.
         */
        getSkewX(): number;

        /**
         * <p>
         *     Changes the X skew angle of the node in degrees.                                                    <br/>
         *                                                                                                         <br/>
         *      This angle describes the shear distortion in the X direction.                                      <br/>
         *      Thus, it is the angle between the Y axis and the left edge of the shape                            <br/>
         *      The default skewX angle is 0. Positive values distort the node in a CW direction.
         * </p>
         * @param {Number} newSkewX The X skew angle of the node in degrees.
         */
        setSkewX(newSkewX: number): void ;

        /**
         * <p>get the skew degrees in Y               <br/>
         * The Y skew angle of the node in degrees.                            <br/>
         * This angle describes the shear distortion in the Y direction.       <br/>
         * Thus, it is the angle between the X axis and the bottom edge of the shape       <br/>
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.    <br/>
         * </p>
         * @return {Number} The Y skew angle of the node in degrees.
         */
        getSkewY(): number;

        /**
         * <p>
         * Changes the Y skew angle of the node in degrees.                                                        <br/>
         *                                                                                                         <br/>
         * This angle describes the shear distortion in the Y direction.                                           <br/>
         * Thus, it is the angle between the X axis and the bottom edge of the shape                               <br/>
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.                      <br/>
         * </p>
         * @param {Number} newSkewY  The Y skew angle of the node in degrees.
         */
        setSkewY(newSkewY: number): void;

        /**
         * <p> LocalZOrder is the 'key' used to sort the node relative to its siblings.                                    <br/>
         *                                                                                                                 <br/>
         * The Node's parent will sort all its children based ont the LocalZOrder value.                                   <br/>
         * If two nodes have the same LocalZOrder, then the node that was added first to the children's array              <br/>
         * will be in front of the other node in the array.                                                                <br/>
         *                                                                                                                 <br/>
         * Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order )                <br/>
         * And Nodes that have LocalZOder values < 0 are the "left" subtree                                                 <br/>
         * While Nodes with LocalZOder >=0 are the "right" subtree.    </p>
         * @param {Number} localZOrder
         */
        setLocalZOrder(localZOrder: number): void;


        /**
         * Gets the local Z order of this node.
         * @returns {Number} The local (relative to its siblings) Z order.
         */
        getLocalZOrder(): number;
        /**
         * zOrder getter
         * @return {Number}
         * @deprecated
         */
        getZOrder(): number;

        /**
         * <p>
         *     Sets the Z order which stands for the drawing order, and reorder this node in its parent's children array.     <br/>
         *                                                                                                                    <br/>
         *      The Z order of node is relative to its "brothers": children of the same parent.                               <br/>
         *      It's nothing to do with OpenGL's z vertex. This one only affects the draw order of nodes in cocos2d.          <br/>
         *      The larger number it is, the later this node will be drawn in each message loop.                              <br/>
         *      Please refer to setVertexZ(float) for the difference.
         * </p>
         * @param {Number} z Z order of this node.
         * @deprecated
         */
        setZOrder(z: number): void;

        /**
         * <p>Defines the oder in which the nodes are renderer.                                                                               <br/>
         * Nodes that have a Global Z Order lower, are renderer first.                                                                        <br/>
         *                                                                                                                                    <br/>
         * In case two or more nodes have the same Global Z Order, the oder is not guaranteed.                                                <br/>
         * The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.                           <br/>
         *                                                                                                                                    <br/>
         * By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.    <br/>
         *                                                                                                                                    <br/>
         * Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.                           <br/>
         *                                                                                                                                    <br/>
         * Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.                       <br/>
         * And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.   </p>
         * @param {Number} globalZOrder
         */
        setGlobalZOrder(globalZOrder: number): void;

        /**
         * Returns the Node's Global Z Order.
         * @returns {number} The node's global Z order
         */
        getGlobalZOrder(): number;

        /**
         * Gets WebGL Z vertex of this node.
         * @return {Number} WebGL Z vertex of this node
         */
        getVertexZ(): number;

        /**
         * <p>
         *     Sets the real WebGL Z vertex.                                                                          <br/>
         *                                                                                                            <br/>
         *      Differences between openGL Z vertex and cocos2d Z order:                                              <br/>
         *      - OpenGL Z modifies the Z vertex, and not the Z order in the relation between parent-children         <br/>
         *      - OpenGL Z might require to set 2D projection                                                         <br/>
         *      - cocos2d Z order works OK if all the nodes uses the same openGL Z vertex. eg: vertexZ = 0            <br/>
         *                                                                                                            <br/>
         *      @warning Use it at your own risk since it might break the cocos2d parent-children z order
         * </p>
         * @param {Number} Var
         */
        setVertexZ(Var: number): void;
        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. Positive values rotate node CW.
         * @return {Number} The rotation of the node in degrees.
         */
        getRotation(): number;

        /**
         * <p>
         *     Sets the rotation (angle) of the node in degrees.                                             <br/>
         *                                                                                                   <br/>
         *      0 is the default rotation angle.                                                             <br/>
         *      Positive values rotate node clockwise, and negative values for anti-clockwise.
         * </p>
         * @param {Number} newRotation The rotation of the node in degrees.
         */
        setRotation(newRotation: number): void;

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. <br/>
         * Positive values rotate node CW. It only modifies the X rotation performing a horizontal rotational skew .
         * (support only in WebGl rendering mode)
         * @return {Number} The X rotation in degrees.
         */
        getRotationX(): number;

        /**
         * <p>
         *     Sets the X rotation (angle) of the node in degrees which performs a horizontal rotational skew.        <br/>
         *                                                                                                            <br/>
         *     0 is the default rotation angle.                                                                       <br/>
         *     Positive values rotate node clockwise, and negative values for anti-clockwise.
         * </p>
         * @param {Number} rotationX The X rotation in degrees which performs a horizontal rotational skew.
         */
        setRotationX(rotationX: number): void;

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle.  <br/>
         * Positive values rotate node CW. It only modifies the Y rotation performing a vertical rotational skew .
         * @return {Number} The Y rotation in degrees.
         */
        getRotationY(): number;

        /**
         * <p>
         *    Sets the Y rotation (angle) of the node in degrees which performs a vertical rotational skew.         <br/>
         *                                                                                                          <br/>
         *      0 is the default rotation angle.                                                                    <br/>
         *      Positive values rotate node clockwise, and negative values for anti-clockwise.
         * </p>
         * @param rotationY The Y rotation in degrees.
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
         * @param {Number} [scaleY=]
         */
        setScale(scale: number): void;
        setScale(scaleX: number, scaleY: number): void;

        /**
         * Returns the scale factor on X axis of this node
         * @return {Number} The scale factor on X axis.
         */
        getScaleX(): number

    /**
     * <p>
     *     Changes the scale factor on X axis of this node                                   <br/>
     *     The deafult value is 1.0 if you haven't changed it before
     * </p>
     * @param {Number} newScaleX The scale factor on X axis.
     */
        setScaleX(newScaleX: number): void;

        /**
         * Returns the scale factor on Y axis of this node
         * @return {Number} The scale factor on Y axis.
         */
        getScaleY(): number

    /**
     * <p>
     *     Changes the scale factor on Y axis of this node                                            <br/>
     *     The Default value is 1.0 if you haven't changed it before.
     * </p>
     * @param {Number} newScaleY The scale factor on Y axis.
     */
        setScaleY(newScaleY: number): void;

        /**
         * <p>
         *     Changes the position (x,y) of the node in OpenGL coordinates
         *     Usually we use ccp(x,y) to compose CCPoint object.
         *     The original point (0,0) is at the left-bottom corner of screen.
         *     and Passing two numbers (x,y) is much efficient than passing CCPoint object.
         * </p>
         * @param {cc.Point|Number} newPosOrxValue The position (x,y) of the node in coordinates or  X coordinate for position
         * @param {Number} [yValue] Y coordinate for position
         * @example
         *    var size = cc.director.getWinSize();
         *    node.setPosition(size.width/2, size.height/2);
         */
        setPosition(xValue: number, yValue: number): void;
        setPosition(pos: Point): void;

        /**
         * <p>Position (x,y) of the node in OpenGL coordinates. (0,0) is the left-bottom corner. </p>
         * @const
         * @return {cc.Point} The position (x,y) of the node in OpenGL coordinates
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
         * Get the amount of children.
         * @return {Number} The amount of children.
         */
        getChildrenCount(): number;

        /**
         * Return an array of children  <br/>
         * Composing a "tree" structure is a very important feature of CCNode
         * @return {Array} An array of children
         * @example
         *  //This sample code traverses all children nodes, and set their position to (0,0)
         *  var allChildren = parent.getChildren();
         * for(var i = 0; i< allChildren.length; i++) {
         *     allChildren[i].setPosition(0,0);
         * }
         */
        getChildren(): Node[];

        /**
         * Determines if the node is visible
         * @see setVisible(bool)
         * @return {Boolean} true if the node is visible, false if the node is hidden.
         */
        isVisible(): boolean;

        /**
         * Sets whether the node is visible <br/>
         * The default value is true, a node is default to visible
         * @param {Boolean} Var true if the node is visible, false if the node is hidden.
         */
        setVisible(Var: boolean): void;

        /**
         *  <p>anchorPoint is the point around which all transformations and positioning manipulations take place.<br/>
         *  It's like a pin in the node where it is "attached" to its parent. <br/>
         *  The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
         *  But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
         *  The default anchorPoint is (0.5,0.5), so it starts in the center of the node. <br/></p>
         *  @const
         * @return {cc.Point}  The anchor point of node.
         */
        getAnchorPoint(): Point;

        /**
         * <p>
         *     Sets the anchor point in percent.                                                                                              <br/>
         *                                                                                                                                    <br/>
         *     anchorPoint is the point around which all transformations and positioning manipulations take place.                            <br/>
         *     It's like a pin in the node where it is "attached" to its parent.                                                              <br/>
         *     The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.     <br/>
         *     But you can use values higher than (1,1) and lower than (0,0) too.                                                             <br/>
         *     The default anchorPoint is (0.5,0.5), so it starts in the center of the node.
         * </p>
         * @param {cc.Point|Number} point The anchor point of node or The anchor point.x of node.
         * @param {Number} [y] The anchor point.y of node.
         */
        setAnchorPoint(x: number, y: number): void;
        setAnchorPoint(point: Point): void;


        /**
         *  The anchorPoint in absolute pixels.  <br/>
         *  you can only read it. If you wish to modify it, use anchorPoint instead
         *  @see getAnchorPoint()
         *  @const
         * @return {cc.Point} The anchor point in absolute pixels.
         */
        getAnchorPointInPoints(): Point;


        /**
         * <p>The untransformed size of the node. <br/>
         * The contentSize remains the same no matter the node is scaled or rotated.<br/>
         * All nodes has a size. Layer and Scene has the same size of the screen. <br/></p>
         * @const
         * @return {cc.Size} The untransformed size of the node.
         */
        getContentSize(): Size;

        /**
         * <p>
         *     Sets the untransformed size of the node.                                             <br/>
         *                                                                                          <br/>
         *     The contentSize remains the same no matter the node is scaled or rotated.            <br/>
         *     All nodes has a size. Layer and Scene has the same size of the screen.
         * </p>
         * @param {cc.Size|Number} size The untransformed size of the node or The untransformed size's width of the node.
         * @param {Number} [height] The untransformed size's height of the node.
         */
        setContentSize(size: Size): void;
        setContentSize(width: number, height: number): void;

        /**
         * <p>
         *     Returns whether or not the node accepts event callbacks.                                     <br/>
         *     Running means the node accept event callbacks like onEnter(), onExit(), update()
         * </p>
         * @return {Boolean} Whether or not the node is running.
         */
        isRunning(): boolean;

        /**
         * Returns a pointer to the parent node
         * @return {cc.Node} A pointer to the parent node
         */
        getParent(): Node;

        /**
         * Sets the parent node
         * @param {cc.Node} Var A pointer to the parent node
         */
        setParent(Var: Node): void;

        /**
         * Gets whether the anchor point will be (0,0) when you position this node.
         * @see ignoreAnchorPointForPosition(bool)
         * @return {Boolean} true if the anchor point will be (0,0) when you position this node.
         */
        isIgnoreAnchorPointForPosition(): boolean;

        /**
         * <p>
         *     Sets whether the anchor point will be (0,0) when you position this node.                              <br/>
         *                                                                                                           <br/>
         *     This is an internal method, only used by CCLayer and CCScene. Don't call it outside framework.        <br/>
         *     The default value is false, while in CCLayer and CCScene are true
         * </p>
         * @param {Boolean} newValue true if anchor point will be (0,0) when you position this node
         */
        ignoreAnchorPointForPosition(newValue: boolean): void;

        /**
         * Returns a tag that is used to identify the node easily.
         *
         * @return {Number} An integer that identifies the node.
         * @example
         *  //You can set tags to node then identify them easily.
         * // set tags
         * node1.setTag(TAG_PLAYER);
         * node2.setTag(TAG_MONSTER);
         * node3.setTag(TAG_BOSS);
         * parent.addChild(node1);
         * parent.addChild(node2);
         * parent.addChild(node3);
         * // identify by tags
         * var allChildren = parent.getChildren();
         * for(var i = 0; i < allChildren.length; i++){
         *     switch(node.getTag()) {
         *         case TAG_PLAYER:
         *             break;
         *         case TAG_MONSTER:
         *             break;
         *         case TAG_BOSS:
         *             break;
         *     }
         * }
         */
        getTag(): number;

        /**
         * Changes the tag that is used to identify the node easily. <br/>
         * Please refer to getTag for the sample code.
         * @param {Number} Var A integer that identifies the node.
         */
        setTag(Var: number): void;

        /**
         * <p>
         *     Returns a custom user data pointer                                                               <br/>
         *     You can set everything in UserData pointer, a data block, a structure or an object.
         * </p>
         * @return {object}  A custom user data pointer
         */
        getUserData(): Object;

        /**
         * <p>
         *    Sets a custom user data pointer                                                                   <br/>
         *    You can set everything in UserData pointer, a data block, a structure or an object, etc.
         * </p>
         * @warning Don't forget to release the memory manually,especially before you change this data pointer, and before this node is autoreleased.
         * @param {object} Var A custom user data
         */
        setUserData(Var: Object): void;

        /**
         * Returns a user assigned CCObject.                             <br/>
         * Similar to userData, but instead of holding a void* it holds an id
         * @return {object} A user assigned CCObject
         */
        getUserObject(): Object;

        /**
         * <p>
         *      Returns a user assigned CCObject                                                                                       <br/>
         *      Similar to UserData, but instead of holding a void* it holds an object.                                               <br/>
         *      The UserObject will be retained once in this method, and the previous UserObject (if existed) will be release.         <br/>
         *      The UserObject will be released in CCNode's destruction.
         * </p>
         * @param {object} newValue A user assigned CCObject
         */
        setUserObject(newValue: Object): void;


        /**
         * Returns the arrival order, indicates which children is added previously.
         * @return {Number} The arrival order.
         */
        getOrderOfArrival(): number;

        /**
         * <p>
         *     Sets the arrival order when this node has a same ZOrder with other children.                             <br/>
         *                                                                                                              <br/>
         *     A node which called addChild subsequently will take a larger arrival order,                              <br/>
         *     If two children have the same Z order, the child with larger arrival order will be drawn later.
         * </p>
         * @warning This method is used internally for zOrder sorting, don't change this manually
         * @param {Number} Var  The arrival order.
         */
        setOrderOfArrival(Var: number): void;

        /**
         * <p>Gets the CCActionManager object that is used by all actions.<br/>
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)</p>
         * @see setActionManager()
         * @return {cc.ActionManager} A CCActionManager object.
         */
        getActionManager(): ActionManager;

        /**
         * <p>Sets the cc.ActionManager object that is used by all actions. </p>
         * @warning If you set a new CCActionManager, then previously created actions will be removed.
         * @param {cc.ActionManager} actionManager A CCActionManager object that is used by all actions.
         */
        setActionManager(actionManager: ActionManager): void;

        /**
         * <p>
         *   cc.Scheduler used to schedule all "updates" and timers.<br/>
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         * </p>
         * @return {cc.Scheduler} A CCScheduler object.
         */
        getScheduler(): Scheduler;

        /**
         * <p>
         *   Sets a CCScheduler object that is used to schedule all "updates" and timers.           <br/>
         * </p>
         * @warning If you set a new CCScheduler, then previously created timers/update are going to be removed.
         * @param scheduler A cc.Scheduler object that is used to schedule all "update" and timers.
         */
        setScheduler(scheduler: Scheduler): void;

        /**
         * Returns a "local" axis aligned bounding box of the node. <br/>
         * The returned box is relative only to its parent.
         * @note This method returns a temporary variable, so it can't returns const CCRect&
         * @const
         * @return {cc.Rect}
         */
        getBoundingBox(): Rect;

        /**
         * Stops all running actions and schedulers
         */
        cleanup(): void;

        // composition: GET
        /**
         * Gets a child from the container given its tag
         * @param {Number} aTag An identifier to find the child node.
         * @return {cc.Node} a CCNode object whose tag equals to the input parameter
         */
        getChildByTag(aTag: number): Node;

        // composition: ADD

        /** <p>"add" logic MUST only be on this method <br/> </p>
         *
         * <p>If the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.</p>
         *
         * @param {cc.Node} child  A child node
         * @param {Number} [localZOrder=]  Z order for drawing priority. Please refer to setZOrder(int)
         * @param {Number} [tag=]  A integer to identify the node easily. Please refer to setTag(int)
         */
        addChild(child: Node, localZOrder: number, tag: number);
        addChild(child: Node, localZOrder: number);
        addChild(child: Node);

        // composition: REMOVE
        /**
         * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * If the node orphan, then nothing happens.
         * @param {Boolean} cleanup true if all actions and callbacks on this node should be removed, false otherwise.
         * @see removeFromParentAndCleanup(bool)
         */
        removeFromParent(cleanup: boolean): void;

        /**
         * Removes this node itself from its parent node.  <br/>
         * If the node orphan, then nothing happens.
         * @deprecated
         * @param {Boolean} cleanup true if all actions and callbacks on this node should be removed, false otherwise.
         */
        removeFromParentAndCleanup(cleanup: boolean): void;

        /** <p>Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         *<p> "remove" logic MUST only be on this method  <br/>
         * If a class wants to extend the 'removeChild' behavior it only needs <br/>
         * to override this method </p>
         *
         * @param {cc.Node} child  The child node which will be removed.
         * @param {Boolean|null} [cleanup=null]  true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         */
        removeChild(child: Node, cleanup: boolean): void;
        removeChild(child: Node): void;

        /**
         * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Number} tag An integer number that identifies a child node
         * @param {Boolean} cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         * @see removeChildByTag(int, bool)
         */
        removeChildByTag(tag: number, cleanup: boolean): void;

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * @deprecated
         * @param {Boolean | null } cleanup
         */
        removeAllChildrenWithCleanup(cleanup: boolean): void;
        removeAllChildrenWithCleanup(): void;

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Boolean | null } cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
         */
        removeAllChildren(cleanup: number): void;
        removeAllChildren(): void;


        /** Reorders a child according to a new z value. <br/>
         * The child MUST be already added.
         * @param {cc.Node} child An already added child node. It MUST be already added.
         * @param {Number} zOrder Z order for drawing priority. Please refer to setZOrder(int)
         */
        reorderChild(child: Node, zOrder: number);

        /**
         * <p>
         *     Sorts the children array once before drawing, instead of every time when a child is added or reordered.    <br/>
         *     This approach can improves the performance massively.
         * </p>
         * @note Don't call this manually unless a child added needs to be removed in the same frame
         */
        sortAllChildren(): void;



        /** performs OpenGL view-matrix transformation of it's ancestors.<br/>
         * Generally the ancestors are already transformed, but in certain cases (eg: attaching a FBO) <br/>
         * it's necessary to transform the ancestors again.
         */
        transformAncestors(): void;

        //scene managment
        /**
         * <p>
         *     Event callback that is invoked every time when CCNode enters the 'stage'.                                   <br/>
         *     If the CCNode enters the 'stage' with a transition, this event is called when the transition starts.        <br/>
         *     During onEnter you can't access a "sister/brother" node.                                                    <br/>
         *     If you override onEnter, you shall call its parent's one, e.g., CCNode::onEnter().
         * </p>
         */
        onEnter(): void;

        /**
         * <p>
         *     Event callback that is invoked when the CCNode enters in the 'stage'.                                                        <br/>
         *     If the CCNode enters the 'stage' with a transition, this event is called when the transition finishes.                       <br/>
         *     If you override onEnterTransitionDidFinish, you shall call its parent's one, e.g. CCNode::onEnterTransitionDidFinish()
         * </p>
         */
        onEnterTransitionDidFinish(): void;

        /**
         * <p>callback that is called every time the cc.Node leaves the 'stage'.  <br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts. </p>
         */
        onExitTransitionDidStart(): void;

        /**
         * <p>
         * callback that is called every time the cc.Node leaves the 'stage'.                                         <br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes. <br/>
         * During onExit you can't access a sibling node.                                                             <br/>
         * If you override onExit, you shall call its parent's one, e.g., CCNode::onExit().
         * </p>
         */
        onExit(): void;

        // actions
        /**
         * Executes an action, and returns the action that is executed.<br/>
         * The node becomes the action's target. Refer to CCAction::getTarget()
         * @warning Starting from v0.8 actions don't retain their target anymore.
         * @param {cc.Action} action
         * @return {cc.Action} An Action pointer
         */
        runAction(action: Action): Action;

        /**
         * Stops and removes all actions from the running action list .
         */
        stopAllActions(): void;

        /**
         * Stops and removes an action from the running action list.
         * @param {cc.Action} action An action object to be removed.
         */
        stopAction(action): void;

        /**
         * Removes an action from the running action list by its tag.
         * @param {Number} tag A tag that indicates the action to be removed.
         */
        stopActionByTag(tag: number): void;

        /**
         * Gets an action from the running action list by its tag.
         * @see setTag(int), getTag().
         * @param {Number} tag
         * @return {cc.Action} The action object with the given tag.
         */
        getActionByTag(tag: number): Action;

        /** Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
         *    Composable actions are counted as 1 action. Example:<br/>
         *    If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         *    If you are running 7 Sequences of 2 actions, it will return 7.
         * @return {Number} The number of actions that are running plus the ones that are schedule to run
         */
        getNumberOfRunningActions(): number;

        // cc.Node - Callbacks
        // timers
        /**
         * schedules the "update" method.                                                                           <br/>
         * It will use the order number 0. This method will be called every frame.                                  <br/>
         * Scheduled methods with a lower order value will be called before the ones that have a higher order value.<br/>
         * Only one "update" method could be scheduled per node.
         */
        scheduleUpdate(): void;

        /**
         * <p>
         * schedules the "update" callback function with a custom priority.
         * This callback function will be called every frame.<br/>
         * Scheduled callback functions with a lower priority will be called before the ones that have a higher value.<br/>
         * Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).<br/>
         * </p>
         * @param {Number} priority
         */
        scheduleUpdateWithPriority(priority: number): void;

        /**
         * unschedules the "update" method.
         * @see scheduleUpdate();
         */
        unscheduleUpdate(): void;

        /**
         * Schedules a custom selector.         <br/>
         * If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.
         *
         * @param {function} callback_fn A function wrapped as a selector
         * @param {Number} interval  Tick interval in seconds. 0 means tick every frame. If interval = 0, it's recommended to use scheduleUpdate() instead.
         * @param {Number} repeat    The selector will be executed (repeat + 1) times, you can use kCCRepeatForever for tick infinitely.
         * @param {Number} delay     The amount of time that the first tick will wait before execution.
         */
        schedule(callback_fn, interval: number, repeat: number, delay: number): void;

        /**
         * Schedules a callback function that runs only once, with a delay of 0 or larger
         * @see schedule(SEL_SCHEDULE, float, unsigned int, float)
         * @param {function} callback_fn  A function wrapped as a selector
         * @param {Number} delay  The amount of time that the first tick will wait before execution.
         */
        scheduleOnce(callback_fn, delay: number): void;

        /**
         * unschedules a custom callback function.
         * @see schedule(SEL_SCHEDULE, float, unsigned int, float)
         * @param {function} callback_fn  A function wrapped as a selector
         */
        unschedule(callback_fn): void;

        /**
         * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
         * Actions are not affected by this method.
         */
        unscheduleAllCallbacks(): void;

        /**
         * Resumes all scheduled selectors and actions.<br/>
         * This method is called internally by onEnter
         * @deprecated
         */
        resumeSchedulerAndActions(): void;

        /**
         * Resumes all scheduled selectors and actions.<br/>
         * This method is called internally by onEnter
         */
        resume(): void;

        /**
         * Pauses all scheduled selectors and actions.<br/>
         * This method is called internally by onExit
         * @deprecated
         */
        pauseSchedulerAndActions(): void;

        /**
         * Pauses all scheduled selectors and actions.<br/>
         * This method is called internally by onExit
         */
        pause(): void;

        /**
         *<p>  Sets the additional transform.<br/>
         *  The additional transform will be concatenated at the end of nodeToParentTransform.<br/>
         *  It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).<br/>
         *  </p>
         *  @example
         * // create a batchNode
         * var batch= cc.SpriteBatchNode.create("Icon-114.png");
         * this.addChild(batch);
         *
         * // create two sprites, spriteA will be added to batchNode, they are using different textures.
         * var spriteA = cc.Sprite.create(batch->getTexture());
         * var spriteB = cc.Sprite.create("Icon-72.png");
         *
         * batch.addChild(spriteA);
         *
         * // We can't make spriteB as spriteA's child since they use different textures. So just add it to layer.
         * // But we want to simulate `parent-child` relationship for these two node.
         * this.addChild(spriteB);
         *
         * //position
         * spriteA.setPosition(ccp(200, 200));
         *
         * // Gets the spriteA's transform.
         * var t = spriteA.nodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's position will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         *
         * //scale
         * spriteA.setScale(2);
         *
         * // Gets the spriteA's transform.
         * t = spriteA.nodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's scale will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         *
         * //rotation
         * spriteA.setRotation(20);
         *
         * // Gets the spriteA's transform.
         * t = spriteA.nodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's rotation will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         */
        //setAdditionalTransform (additionalTransform) : 

        /**
         * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
         * The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        parentToNodeTransform(): AffineTransform;

        /**
         *  Returns the world affine transform matrix. The matrix is in Pixels.
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
         * @param {Number} dt deltaTime
         */
        update(dt: number): void;

        /**
         * <p>
         * Calls children's updateTransform() method recursively.                                        <br/>
         *                                                                                               <br/>
         * This method is moved from CCSprite, so it's no longer specific to CCSprite.                   <br/>
         * As the result, you apply CCSpriteBatchNode's optimization on your customed CCNode.            <br/>
         * e.g., batchNode->addChild(myCustomNode), while you can only addChild(sprite) before.
         * </p>
         */
        updateTransform(): void;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         */
        retain(): void;
        release(): void;

        /**
         * gets a component by its name
         * @param {String} name
         * @return {cc.Component} gets a component by its name
         */
        getComponent(name: string): Component;

        /**
         * adds a component
         * @param {cc.Component} component
         */
        addComponent(component: Component): void;

        /**
         * removes a component by its name or a component
         * @param {String|cc.Component} name
         */
        removeComponent(name: string): void;
        removeComponent(component: Component): void;

        /**
         * removes all components
         */
        removeAllComponents(): void;

        /**
         * Returns a camera object that lets you move the node using a gluLookAt
         * @return {cc.Camera} A CCCamera object that lets you move the node using a gluLookAt
         * @example
         * var camera = node.getCamera();
         * camera.setEye(0, 0, 415/2);
         * camera.setCenter(0, 0, 0);
         */
        getCamera(): Camera;

        /**
         * Returns a grid object that is used when applying effects
         * @return {cc.GridBase} A CCGrid object that is used when applying effects
         */
        getGrid(): GridBase;

        /**
         * Changes a grid object that is used when applying effects
         * @param {cc.GridBase} grid A CCGrid object that is used when applying effects
         */
        setGrid(grid: GridBase): void;

        /**
         * Return the shader program currently used for this node
         * @return {cc.GLProgram} The shader program currelty used for this node
         */
        getShaderProgram(): GLProgram;

        /**
         * <p>
         *     Sets the shader program for this node
         *
         *     Since v2.0, each rendering node must set its shader program.
         *     It should be set in initialize phase.
         * </p>
         * @param {cc.GLProgram} newShaderProgram The shader program which fetchs from CCShaderCache.
         * @example
         *  node.setShaderProgram(cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR));
         */
        setShaderProgram(newShaderProgram: GLProgram): void;


        /** returns a "world" axis aligned bounding box of the node. <br/>
         * @return {cc.Rect}
         */
        getBoundingBoxToWorld(): Rect;
    }
}