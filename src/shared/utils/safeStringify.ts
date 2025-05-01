export default function safeStringify(obj, indent = 2) {
    const cache = {};

    for (let key in obj) {
        let value = obj[key];
        if (typeof value === "object" && value !== null) {
            if (indent > 0) {
            value = safeStringify(value, indent - 1)

            } else {
                value = "[Object]"
            }
          }
          cache[key] = value;
    }
    return cache;
  }
  