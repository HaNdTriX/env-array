import test from 'ava'
import envArray from './'

test('should always return an array', async t => {
  t.deepEqual(envArray(), [])
})

test('should include env specific array', async t => {
  t.deepEqual(envArray({
    [process.env.NODE_ENV]: [
      'foo'
    ]
  }), ['foo'])
})

test('should not include non env specific array', async t => {
  t.is(envArray({
    nonEnvName: [
      'foo'
    ]
  })[0], undefined)
})
