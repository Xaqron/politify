module.exports = f => new Promise((resolve) => setTimeout(() => resolve(f), 1 << 0x1e))
