/** An XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents. */
interface XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLDocument: {
    prototype: XMLDocument;
    new(): XMLDocument;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

/** Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. */
interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    /** Returns client's state. */
    readonly readyState: number;
    /** Returns the response body. */
    readonly response: any;
    /**
     * Returns response as text.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     */
    readonly responseText: string;
    /**
     * Returns the response type.
     *
     * Can be set to change the response type. Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
     *
     * When set: setting to "document" is ignored if current global object is not a Window object.
     *
     * When set: throws an "InvalidStateError" DOMException if state is loading or done.
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    /**
     * Returns the response as document.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "document".
     */
    readonly responseXML: Document | null;
    readonly status: number;
    readonly statusText: string;
    /**
     * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the request has not yet completed, and this's synchronous flag is unset, a timeout event will then be dispatched, or a "TimeoutError" DOMException will be thrown otherwise (for the send() method).
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    timeout: number;
    /** Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is transferred to a server. */
    readonly upload: XMLHttpRequestUpload;
    /**
     * True when credentials are to be included in a cross-origin request. False when they are to be excluded in a cross-origin request and when cookies are to be ignored in its response. Initially false.
     *
     * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
     */
    withCredentials: boolean;
    /** Cancels any network activity. */
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    /**
     * Sets the request method, request URL, and synchronous flag.
     *
     * Throws a "SyntaxError" DOMException if either method is not a valid method or url cannot be parsed.
     *
     * Throws a "SecurityError" DOMException if method is a case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
     *
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     */
    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    /**
     * Acts as if the `Content-Type` header value for a response is mime. (It does not change the header.)
     *
     * Throws an "InvalidStateError" DOMException if state is loading or done.
     */
    overrideMimeType(mime: string): void;
    /**
     * Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     */
    send(body?: Document | XMLHttpRequestBodyInit | null): void;
    /**
     * Combines a header in author request headers.
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     *
     * Throws a "SyntaxError" DOMException if name is not a header name or if value is not a header value.
     */
    setRequestHeader(name: string, value: string): void;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent<XMLHttpRequestEventTarget>;
    "error": ProgressEvent<XMLHttpRequestEventTarget>;
    "load": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadend": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadstart": ProgressEvent<XMLHttpRequestEventTarget>;
    "progress": ProgressEvent<XMLHttpRequestEventTarget>;
    "timeout": ProgressEvent<XMLHttpRequestEventTarget>;
}

interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};

/** Provides the serializeToString() method to construct an XML string representing a DOM tree. */
interface XMLSerializer {
    serializeToString(root: Node): string;
}

declare var XMLSerializer: {
    prototype: XMLSerializer;
    new(): XMLSerializer;
};

/** The XPathEvaluator interface allows to compile and evaluate XPath expressions. */
interface XPathEvaluator extends XPathEvaluatorBase {
}

declare var XPathEvaluator: {
    prototype: XPathEvaluator;
    new(): XPathEvaluator;
};

interface XPathEvaluatorBase {
    createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
    createNSResolver(nodeResolver: Node): XPathNSResolver;
    evaluate(expression: string, contextNode: Node, resolver?: XPathNSResolver | null, type?: number, result?: XPathResult | null): XPathResult;
}

/** This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information its DOM tree. */
interface XPathExpression {
    evaluate(contextNode: Node, type?: number, result?: XPathResult | null): XPathResult;
}

declare var XPathExpression: {
    prototype: XPathExpression;
    new(): XPathExpression;
};

/** The results generated by evaluating an XPath expression within the context of a given node. */
interface XPathResult {
    readonly booleanValue: boolean;
    readonly invalidIteratorState: boolean;
    readonly numberValue: number;
    readonly resultType: number;
    readonly singleNodeValue: Node | null;
    readonly snapshotLength: number;
    readonly stringValue: string;
    iterateNext(): Node | null;
    snapshotItem(index: number): Node | null;
    readonly ANY_TYPE: 0;
    readonly NUMBER_TYPE: 1;
    readonly STRING_TYPE: 2;
    readonly BOOLEAN_TYPE: 3;
    readonly UNORDERED_NODE_ITERATOR_TYPE: 4;
    readonly ORDERED_NODE_ITERATOR_TYPE: 5;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: 6;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: 7;
    readonly ANY_UNORDERED_NODE_TYPE: 8;
    readonly FIRST_ORDERED_NODE_TYPE: 9;
}

declare var XPathResult: {
    prototype: XPathResult;
    new(): XPathResult;
    readonly ANY_TYPE: 0;
    readonly NUMBER_TYPE: 1;
    readonly STRING_TYPE: 2;
    readonly BOOLEAN_TYPE: 3;
    readonly UNORDERED_NODE_ITERATOR_TYPE: 4;
    readonly ORDERED_NODE_ITERATOR_TYPE: 5;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: 6;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: 7;
    readonly ANY_UNORDERED_NODE_TYPE: 8;
    readonly FIRST_ORDERED_NODE_TYPE: 9;
};

/** An XSLTProcessor applies an XSLT stylesheet transformation to an XML document to produce a new XML document as output. It has methods to load the XSLT stylesheet, to manipulate <xsl:param> parameter values, and to apply the transformation to documents. */
interface XSLTProcessor {
    clearParameters(): void;
    getParameter(namespaceURI: string | null, localName: string): any;
    importStylesheet(style: Node): void;
    removeParameter(namespaceURI: string | null, localName: string): void;
    reset(): void;
    setParameter(namespaceURI: string | null, localName: string, value: any): void;
    transformToDocument(source: Node): Document;
    transformToFragment(source: Node, output: Document): DocumentFragment;
}

declare var XSLTProcessor: {
    prototype: XSLTProcessor;
    new(): XSLTProcessor;
};