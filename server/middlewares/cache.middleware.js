import redis from "../config/redis.js";

const cacheMiddleware = (keyGenerator, expiry = 3600) => {

    return async (req, res, next) => {

        try {

            const cacheKey = keyGenerator(req);

            const cachedData = await redis.get(cacheKey);

            if (cachedData) {

                return res.status(200).json({
                    success: true,
                    source: "redis-cache",
                    data: JSON.parse(cachedData)
                });
            }

            const originalJson = res.json.bind(res);

            res.json = async (body) => {

                if (body?.success) {

                    await redis.set(
                        cacheKey,
                        JSON.stringify(body.data),
                        "EX",
                        expiry
                    );
                }

                return originalJson(body);
            };

            next();

        } catch (error) {

            console.log(error);

            next();
        }
    };
};

export default cacheMiddleware;


// flow for the code
// 1. When a request comes in, the middleware generates a cache key using the provided keyGenerator function.
// 2. It checks Redis for cached data associated with that key.
// 3. If cached data is found, it returns the cached response immediately.
// 4. If no cached data is found, it overrides the res.json method to cache the response data before sending it to the client.
// 5. Finally, it calls next() to pass control to the next middleware or route handler.