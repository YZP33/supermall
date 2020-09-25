module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'asserts': '@/asserts',
				'common': '@/commmon',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	}
}