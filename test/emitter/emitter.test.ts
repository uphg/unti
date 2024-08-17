import { Emitter, useEmitter } from '../../packages/emitter/emitter'

test('Emitter is a function', () => {
  expect(Emitter).toBeTypeOf('function')
  expect(useEmitter).toBeTypeOf('function')
})

test('inherited the Emitter instance', () => {
  const emitter = new Emitter()
  expect(emitter).toBeInstanceOf(Emitter)
})

test('Objects include on, once, emit, off, and clear methods', () => {
  const eventBus = new Emitter()
  const names = ['on', 'once', 'emit', 'off', 'clear'] as const
  names.forEach((method) => {
    expect(eventBus[method]).toBeTypeOf('function')
  })
})

test('subscribe to an event', () => {
  const emitter = new Emitter()
  const fn = () => {}
  emitter.on('test', fn)
  expect(emitter.events['test']).toEqual([fn])
})

test('publish to an event', () => new Promise((done) => {
  const emitter = new Emitter()
  emitter.on('test', () => {
    done(true)
  })
  emitter.emit('test')
}))

test('subscribe the event only once', () => {
  const emitter = new Emitter()
  const fn = vi.fn(() => {})
  emitter.once('test', fn)
  emitter.emit('test')
  emitter.emit('test')
  expect(fn).toHaveBeenCalledOnce()
})

test('pass in multiple parameters', () => new Promise(done => {
  const emitter = new Emitter()
  emitter.on('test', (p1: string, p2: string) => {
    expect(p1).toBe('hi')
    expect(p2).toBe('hello')
    done(true)
  })
  emitter.emit('test', 'hi', 'hello')
}))

test('trigger event multiple times', () => {
  const emitter = new Emitter()
  const mockFn = vi.fn(() => {})
  emitter.on('test', mockFn)
  emitter.emit('test')
  emitter.emit('test')
  emitter.emit('test')
  expect(mockFn).toHaveBeenCalledTimes(3)
})

test('unsubscribe all specified events', () => {
  const emitter = new Emitter()
  const fn1 = vi.fn(() => {})
  const fn2 = vi.fn(() => {})
  emitter.on('test', fn1)
  emitter.on('test', fn2)
  emitter.off('test')
  emitter.emit('test')
  emitter.emit('test')
  expect(fn1).toHaveBeenCalledTimes(0);
  expect(fn2).toHaveBeenCalledTimes(0);
})

test('the specified function for unsubscribing', () => {
  const emitter = new Emitter()
  const mockFn1 = vi.fn(() => {})
  const mockFn2 = vi.fn(() => {})
  emitter.on('test', mockFn1)
  emitter.on('test', mockFn2)
  emitter.off('test', mockFn1)
  emitter.emit('test')
  expect(mockFn1).toHaveBeenCalledTimes(0);
  expect(mockFn2).toHaveBeenCalled();
})

test('cancel the specified function of multiple subscriptions', () => {
  const emitter = new Emitter()
  const mockFn1 = vi.fn(() => {})
  const mockFn2 = vi.fn(() => {})
  emitter.on('test', mockFn1)
  emitter.on('test', mockFn2)
  emitter.on('test', mockFn1)
  emitter.off('test', mockFn1)
  emitter.emit('test')
  expect(mockFn1).toHaveBeenCalledTimes(0);
  expect(mockFn2).toHaveBeenCalledTimes(1);
})

test('you can delete itself when the subscribed event is called', () => new Promise((done) => {
  const emitter = new Emitter()
  emitter.on('test', () => {
    expect(emitter.events['test'].length).toBe(1)
    emitter.off('test')
    expect(emitter.events['test']).toBeUndefined()
    done(true)
  })
  emitter.emit('test')
}))

test('unsubscribe will also be executed', () => {
  const emitter = new Emitter()
  const mockFn = vi.fn(() => {
    emitter.off('test', mockFn)
  })
  emitter.on('test', mockFn)
  emitter.emit('test')
  expect(mockFn).toHaveBeenCalledTimes(1)
})

test('cancel before adding event, do nothing', () => new Promise((done) => {
  const emitter = new Emitter()
  emitter.off('test', () => {})
  done(true)
}))

test('publish events that are not subscribed', () => new Promise((done) => {
  const emitter = new Emitter()
  emitter.emit('test', 'hi')
  done(true)
}))

test('cancel an event that is only subscribed once', () => {
  const emitter = new Emitter()
  const mockFn = vi.fn(() => {})
  emitter.once('test', mockFn)
  emitter.off('test', mockFn)
  emitter.emit('test')
  expect(mockFn).toHaveBeenCalledTimes(0)
})

test('on is used together with once', () => {
  const emitter = new Emitter()
  const mockFn = vi.fn(() => {})
  emitter.once('test', mockFn)
  emitter.on('test', mockFn)
  emitter.off('test', mockFn)
  emitter.emit('test')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
