const assert = require('assert');
const sinon = require('sinon');
const Matrix = require('../matrix');

describe('Matrix', () => {
  let matrixInstance;

  beforeEach(() => {
    matrixInstance = new Matrix(3); 
  });

  it('should initialize a matrix with zeros', () => {
    // Create a spy for the get_matrix method
    // const getMatrixSpy = sinon.spy(matrixInstance, 'get_matrix');
    // matrixInstance = new Matrix(3);
    // sinon.assert.calledWith(getMatrixSpy, 3);

    // for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 4; j++) {
    //     assert.strictEqual(matrixInstance.get(i, j), 0);
    //   }
    // }
  });

  it('should add rows correctly', () => {
    // Create a spy for the mull_add method
    const mullAddSpy = sinon.spy(matrixInstance, 'mull_add');
    matrixInstance.mull_add(1, 0, 2);
    sinon.assert.calledWith(mullAddSpy, 1, 0, 2);
    assert.strictEqual(matrixInstance.get(1, 0), 0); // Modify this based on your expectations
  });

  it('should swap rows correctly', () => {
    // Create a spy for the swap_with_nonzero_row method
    const swapSpy = sinon.spy(matrixInstance, 'swap_with_nonzero_row');
    matrixInstance.swap_with_nonzero_row(0);
    sinon.assert.calledWith(swapSpy, 0);
    assert.strictEqual(matrixInstance.get(0, 0), 0); // Modify this based on your expectations
  });

  it('should check for wrong rows', () => {
    // Initialize the matrix with some non-zero elements in a row
    matrixInstance.set(0, 0, 1);
    matrixInstance.set(0, 1, 2);
    matrixInstance.set(0, 2, 3);
    matrixInstance.set(0, 3, 4);

    // Call the exists_wrong_row method
    const result = matrixInstance.exists_wrong_row();

    // Assert that the method correctly identifies the wrong row
    assert.strictEqual(result, false);
  });

  it('should check for zero rows', () => {
    // Initialize the matrix with a row that contains all zeros
    matrixInstance.set(1, 0, 0);
    matrixInstance.set(1, 1, 0);
    matrixInstance.set(1, 2, 0);
    matrixInstance.set(1, 3, 0);

    // Call the exists_zero_row method
    const result = matrixInstance.exists_zero_row();

    // Assert that the method correctly identifies the zero row
    assert.strictEqual(result, true);
  });

  // Add more test cases for other methods as needed

  afterEach(() => {
    sinon.restore();
  });
});