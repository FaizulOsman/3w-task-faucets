import React from 'react';
import './Faq.css';

const Faq = () => {
	return (
		<div className="faq-sec">
			<h2 className="text-center py-4 fw-bold">Frequently Asked Questions</h2>
			<div>
				<div className="accordion" id="accordionExample">
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="headingOne">
							<button
								className="accordion-button fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								What is a blockchain oracle?
							</button>
						</h2>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								A blockchain oracle is any system that services a smart contract
								by providing it with data from an off-chain source or connecting
								it with an off-chain system. Oracles enable connectivity between
								blockchains and real-world data by interfacing with external
								APIs and data feeds, allowing them to pull data for or push data
								from a smart contract.
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="headingTwo">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								Why do blockchains need oracles?
							</button>
						</h2>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="headingTwo"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								Oracles enable smart contracts to interact with off-chain
								resources. Without oracles, smart contracts can only access data
								within a blockchain, severely limiting their potential
								applications. The majority of industry-changing real-world use
								cases for smart contracts require off-chain data and computation
								for proper execution and often an integration with existing
								payment rails to settle a contract. For example, a smart
								contract may require high-quality weather data from a reputable
								source like AccuWeather to trigger a transaction. It may also
								require the ability to pay out escrowed fiat currency through
								existing financial infrastructure, such as a bank checking
								account.
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								What is the Chainlink Network?
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								The Chainlink Network refers to all of the decentralized oracle
								networks actively operating using the Chainlink protocol,
								including individual oracles, data providers running their own
								node, and node operators. By enabling smart contracts to quickly
								and securely connect to off-chain data sources using
								decentralized oracle networks, the Chainlink Network helps
								developers build more robust and diverse blockchain applications
								using real-world inputs and outputs. Additionally, as middleware
								between low-level blockchain protocols and external, off-chain
								data sources, the Chainlink Network serves as an abstraction
								layer for data providers to easily sell their existing APIs to
								any blockchain network.
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="headingFour">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
								aria-expanded="false"
								aria-controls="collapseFour"
							>
								Where can I explore the performance and reliability of the
								Chainlink Network?
							</button>
						</h2>
						<div
							id="collapseFour"
							className="accordion-collapse collapse"
							aria-labelledby="headingFour"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								The Chainlink Price Feeds page provides real-time visualizations
								of each decentralized price feed that provides on-chain exchange
								rates for cryptocurrencies, stablecoins, commodities, and
								indices. Users can explore each individual price feed, which
								offers transparency around which nodes power each feed, each
								node’s latest response, how often feed updates occur, the gas
								price paid by each node, the users sponsoring each feed, and
								hyperlinks to on-chain transactions.requests, average response
								times, and more.
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFive"
								aria-expanded="false"
								aria-controls="collapseFive"
							>
								What is Chainlink Verifiable Random Function (VRF)?
							</button>
						</h2>
						<div
							id="collapseFive"
							className="accordion-collapse collapse"
							aria-labelledby="headingFive"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								Chainlink VRF brings secure random number generation to the
								blockchain. Chainlink VRF solves the difficult problem of
								providing an on-chain source of randomness that is publicly
								verifiable to be authentic and tamper-proof. Many smart
								contracts are augmenting the value they can create by utilizing
								Chainlink VRF, specifically applications such as gaming dApps
								that must prove to their users that their source of randomness
								is provably fair and resistant to manipulation from any external
								entity. Chainlink VRF enables and accelerates the development of
								smart contracts focused on blockchain gaming, security,
								layer-two protocols, and various other use cases
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="headingSix">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSix"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								What is Chainlink Proof of Reserve?
							</button>
						</h2>
						<div
							id="collapseSix"
							className="accordion-collapse collapse"
							aria-labelledby="headingSix"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								Chainlink Proof of Reserve provides smart contracts with the
								data required to calculate the true collateralization of any
								on-chain asset backed by off-chain reserves such as stablecoins
								and cross-chain assets. Operated by a decentralized network of
								oracles, Chainlink Proof of Reserve enables the autonomous
								auditing of collateral used within DeFi in real-time, ensuring
								users’ funds are protected from unforeseen fractional reserve
								practices and other fraudulent activity from off-chain
								custodians. This provides both the growing DeFi ecosystem and
								the traditional financial system a way to increase the
								transparency of operations with definitive on-chain proof of any
								asset’s true collateralization.
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="headingSeven">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSeven"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								Who can use Chainlink?
							</button>
						</h2>
						<div
							id="collapseSeven"
							className="accordion-collapse collapse"
							aria-labelledby="headingSeven"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								Any individual or group that needs real-world data to power and
								secure the execution of their smart contracts can benefit from
								Chainlink’s robust and customizable framework for creating
								decentralized oracle networks. Today, hundreds of teams working
								on dApps, blockchains, industry consortiums, enterprise
								projects, and more rely on Chainlink to provide tamper-proof
								inputs and outputs for their smart contracts. Chainlink has
								become the de facto oracle solution for the DeFi space,
								supporting top projects like Aave, Synthetix, and Compound, and
								securing billions in value across the sector.If you’d like more
								information on how Chainlink could provide solutions for your
								project, join us in the Official Discord Channel and reach out
								through the integrations submission form
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="heading8">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse8"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								How do I keep up with current protocol development?
							</button>
						</h2>
						<div
							id="collapse8"
							className="accordion-collapse collapse"
							aria-labelledby="heading8"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								The Chainlink development team is continuously building the
								network and protocol. To keep up to date with current progress
								you can follow the Chainlink Github. You can find a full list of
								open roles on the Chainlink Labs careers page.
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="heading9">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse "
								data-bs-target="#collapse9"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								How can I reach out to Chainlink for support?
							</button>
						</h2>
						<div
							id="collapse9"
							className="accordion-collapse collapse "
							aria-labelledby="heading9"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								For inquiries related to security and support, please reach out
								to the admins of official Chainlink channels or email
								support@chain.link‍. You can also find more technical
								information in the documentation. Always practice a security
								mindset and ensure that users you are interacting with on
								community channels have verifiable trusted identities. You can
								confirm the accounts of official Chainlink community admin by
								clicking their names in the chat or viewing their handles under
								the official channel info.
							</div>
						</div>
					</div>
					<div className="accordion-item my-2">
						<h2 className="accordion-header" id="heading10">
							<button
								className="accordion-button collapsed fw-bold fs-5"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse10"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								How do I participate in building Chainlink?
							</button>
						</h2>
						<div
							id="collapse10"
							className="accordion-collapse collapse"
							aria-labelledby="heading10"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								There are numerous projects working on the development of the
								Chainlink ecosystem, including Chainlink Labs. You can find a
								full list of open roles on the Chainlink Labs careers page.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
