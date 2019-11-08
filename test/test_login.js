const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require("chai-http")

chai.use(chaiHttp);
//chai.use(jsonSchema);

const api = chai.request('http://jarvis.dev.mobayar.com/v1/')


describe('Login Test', function() {
		it('succes login using valid credential', function () {
			api.post('cms/login')
			.set('Content-Type', 'application/json')
			.send({
				username: "info@jarvis.com",
				password: "jarvis123"
			})
			.end(function(err, res) {
				expect(res.status).to.equals(200);
				console.log(res.body)
				done()
			})
		}) 
		it('Login Failed using invalid credential', function(){

			api.post('cms/login')
			.set('Content-Type', 'application/json')
			.send({
				username:"info@jarvis.com",
				password: "suciiiii"
				})

			.end(function(err, res){

                //error code/ message "Login failed"
				expect(res.body.message).to.equals('Login failed');

				//error code harus 0 
				expect(res.body.error_code).to.equals(0);
				//console.log(res.body)


                done();
		})
		})

	})