import React from 'react';

const StationCard = ({ stationDetails, packetsToAdd,fetchData, handleStorePackets,error }) => (
    <div className="card card-compact bg-base-300 w-96 shadow-xl px-2 py-4 m-4 mx-5 grow">
          <div className="card-title justify-left">
            {stationDetails ? (
              stationDetails.status === 1 ? (
                <>
                  <input
                    type="radio"
                    name="radio-4"
                    className="radio radio-success m-4"
                    defaultChecked
                  />
                  <h1 className="text-4xl text-success">Online</h1>
                </>
              ) : (
                <>
                  <input
                    type="radio"
                    name="radio-4"
                    className="radio radio-error m-4"
                    defaultChecked
                  />
                  <h1 className="text-4xl text-error">Offline</h1>
                </>
              )
            ) : (
              <span className="loading loading-dots loading-md mx-5"></span>
            )}
          </div>
          <div className="card-body">
            {error && <p className="text-red-500">{error}</p>}
            {stationDetails ? (
              <pre className="whitespace-pre-wrap p-1 rounded-md">
                <span className="text-[#55d1d9]">Name :</span>{" "}
                <span className="text-[#f096b0]">{stationDetails.name}</span>
                <br />
                <span className="text-[#55d1d9]">User ID :</span>{" "}
                <span className="text-[#f096b0]">{stationDetails.userId}</span>
                <br />
                <span className="text-[#55d1d9]">Location :</span>{" "}
                <span className="text-[#f096b0]">
                  {stationDetails.location[0]}, {stationDetails.location[1]}
                </span>
                <br />
                <span className="text-[#55d1d9]">Elevation :</span>{" "}
                <span className="text-[#f096b0]">
                  {stationDetails.elevation} meters
                </span>
                <br />
                <span className="text-[#55d1d9]">Antenna :</span>{" "}
                <span className="text-[#f096b0]">{stationDetails.antenna}</span>
                <br />
                <span className="text-[#55d1d9]">Total Packets :</span>{" "}
                <span className="text-[#f096b0]">
                  {stationDetails.confirmedPackets}
                </span>
                <br />
                <span className="text-[#55d1d9]">Last Packet Time :</span>{" "}
                <span className="text-[#f096b0]">
                  {new Date(stationDetails.lastPacketTime).toLocaleString(
                    "en-IN",
                    { hour12: false }
                  )}
                </span>
                <br />
                <span className="text-[#55d1d9]">Packets to Add :</span>{" "}
                <span className="text-[#f096b0]">{packetsToAdd}</span>
              </pre>
            ) : (
              <span className="loading loading-spinner loading-lg mx-36 my-10"></span>
            )}
          </div>
          <div className="card-actions justify-between px-4 py-2">
            <button
              className="btn btn-md btn-outline btn-accent"
              onClick={fetchData}
            >
              Refresh Data
            </button>
            <button
              className="btn btn-md btn-outline btn-accent"
              onClick={handleStorePackets}
            >
              Store Packets
            </button>
          </div>
        </div>

);

export default StationCard;