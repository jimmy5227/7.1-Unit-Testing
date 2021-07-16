
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 5000, years: 5, rate: 0.045 })).toEqual('93.22')
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 5000, years: 5, rate: 0.045 })).toBeCloseTo('93.22', 2);
});

/// etc
