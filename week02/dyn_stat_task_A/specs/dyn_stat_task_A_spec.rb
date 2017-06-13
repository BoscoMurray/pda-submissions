require('minitest/autorun')
require_relative('../dyn_stat_task_A')

class TestFailures < Minitest::Test
  
  def test_func1__true
    assert_equal(true, func1(1))
  end

  def test_func1__false
    assert_equal(false, func1(2))    
  end

  def test_max__a
    assert_equal(10, max(10,5))
  end

  def test_max__b
    assert_equal(5, max(1,5))
  end

end