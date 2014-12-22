var streamCallbacks, 
				streamConfiguration, 
				stream;

			streamCallbacks = {
				filledCb: this._onFilled.bind(this),
				rejectedCb: this._onRejected.bind(this),
				streamErrorCb: this._onStreamError.bind(this)
			};

			streamConfiguration = this._streamConfigurationFactory.create(model);

			this._priceStream = this._streamFactory.create(streamConfiguration);
			
			stream.start()
				  .then(_onstreamStart, _onStreamStartFailed);
