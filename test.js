"use strict";

const app = require("./server")

const chai = require('chai');
describe("Return true test", () => {
    it("It shlould return true if called", (done) => {
        chai.expect(app.returnTrue()).to.be.equal(true);
        done();
    })
})

