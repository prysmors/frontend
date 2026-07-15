import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ArrowUpRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const IntelligenceNode = () => (
  <svg className="w-4 h-4 text-[#00ffaa] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function ProductPage() {
  const [activeSdk, setActiveSdk] = useState('RAPIDS');

  const sdkMatrix = [
    {
      id: 'RAPIDS',
      name: 'NVIDIA RAPIDS Accelerator',
      layer: 'Data Acceleration Engine',
      purpose: 'GPU-accelerated data science and analytics processing utilizing cuDF and cuML to bypass CPU bottlenecks.',
      pipelines: [
        'Large-scale enterprise data processing loops',
        'High-density feature engineering pipelines',
        'Sub-millisecond data transformation workflows',
        'Parallelized machine learning preprocessing',
        'Exploratory data analysis at scale'
      ],
      metrics: { engine: 'cuDF / cuML', optimization: '9x Throughput', telemetry: 'Streaming Native' }
    },
    {
      id: 'MERLIN',
      name: 'NVIDIA Merlin',
      layer: 'Decision Optimization Layer',
      purpose: 'Enterprise-scale recommendation and personalization intelligence engineered for processing deep interaction datasets.',
      pipelines: [
        'Predictive customer behavior intelligence mappings',
        'Personalized business recommendation matrices',
        'High-velocity predictive engagement models',
        'Multi-variable enterprise decision optimization'
      ],
      metrics: { engine: 'Merlin Core', optimization: 'Low Latency', telemetry: 'Dynamic Array' }
    },
    {
      id: 'NEMO',
      name: 'NVIDIA NeMo Framework',
      layer: 'Reasoning & Language Intelligence',
      purpose: 'Building advanced enterprise conversational decision assistants, natural language analytics, and reasoning loops.',
      pipelines: [
        'Cross-source enterprise knowledge understanding',
        'Natural language business intelligence translation',
        'Automated generative business insights & summaries',
        'Unstructured document intelligence parsing'
      ],
      metrics: { engine: 'NeMo Guardrails', optimization: 'Context Aware', telemetry: 'Token Stream' }
    },
    {
      id: 'TENSORRT',
      name: 'NVIDIA TensorRT & Triton',
      layer: 'Inference Pipeline Layer',
      purpose: 'High-performance deep learning inference optimizer and multi-model serving deployment engine.',
      pipelines: [
        'Real-time automated anomaly identification serving',
        'Concurrent multi-model enterprise pipeline scaling',
        'Dynamic batching optimization layers',
        'Ultra-low latency decision workflow execution'
      ],
      metrics: { engine: 'Triton Server v2', optimization: 'Optimal GPU VRAM', telemetry: 'Concurrent Serve' }
    },
    {
      id: 'MORPHEUS',
      name: 'NVIDIA Morpheus',
      layer: 'Streaming Intelligence & Security',
      purpose: 'AI-powered streaming cyber intelligence and adaptive anomaly detection pipelines for risk analysis.',
      pipelines: [
        'Real-time automated risk intelligence logs',
        'Continuous high-volume data stream anomaly checks',
        'Adaptive corporate operational threat monitoring',
        'Proactive predictive risk scenario mapping'
      ],
      metrics: { engine: 'Morpheus AI Stream', optimization: 'Line Rate Parsing', telemetry: 'Live Filter' }
    }
  ];

  const currentProfile = sdkMatrix.find(s => s.id === activeSdk) || sdkMatrix[0];

  return (
    <div className="min-h-screen bg-[#070b09] text-[#e2e8f0] font-sans antialiased selection:bg-[#00ffaa] selection:text-black">
      
      <Header />

      <section id="overview" className="relative border-b border-[#14221a] py-16 lg:py-24 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111f17_1px,transparent_1px),linear-gradient(to_bottom,#111f17_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
        
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#00ffaa]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#10b981]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 bg-[#0c1410] border border-[#14221a] rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-[#00ffaa]" />
              <span className="text-[9px] font-mono text-[#00ffaa] font-bold tracking-widest uppercase">STRATEGIC ACCELERATED BUSINESS INTEL</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.0] uppercase">
              AI-Powered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#10b981]">
                Decision Intelligence
              </span><br />
              For Enterprise Scales.
            </h1>

            <p className="text-gray-400 text-xs md:text-sm max-w-xl leading-relaxed font-medium">
              Transform multi-source operational data, financial indicators, and market signals into autonomous recommendations, scenario modeling, and verified predictive insights powered by parallelized GPU runtimes.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href="https://app.prysmors.com/" target="_blank" rel="noopener noreferrer" className="bg-[#00ffaa] hover:bg-[#00dd90] text-black text-xs font-mono font-black px-6 py-4 rounded-xl flex items-center space-x-2 transition-all shadow-lg shadow-[#00ffaa]/10">
                <span>INITIALIZE PRYSMORS CORE</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md bg-[#0b110e] border border-[#14221a] rounded-2xl p-6 shadow-2xl relative">
              <div className="absolute top-3 right-4 font-mono text-[8px] tracking-widest text-gray-600 font-bold">SYSTEM_STACK_TOPOLOGY</div>
              
              <div className="flex items-center justify-between border-b border-[#14221a] pb-3 mb-4 font-mono text-[10px] text-gray-400 font-bold">
                <span>[PRYSMORS FRAMEWORK ENGINE]</span>
                <span className="text-[#00ffaa]">v2.4_LIVE</span>
              </div>

              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex justify-between bg-[#0e1612] border border-[#15261d] px-3 py-2.5 rounded-lg">
                  <span className="text-gray-500">COMPUTE GRAPH</span>
                  <span className="text-white font-bold">PyTorch / Apache Spark</span>
                </div>
                <div className="flex justify-between bg-[#0e1612] border border-[#15261d] px-3 py-2.5 rounded-lg">
                  <span className="text-gray-500">STREAMING INGEST</span>
                  <span className="text-white font-bold">Apache Kafka</span>
                </div>
                <div className="flex justify-between bg-[#0e1612] border border-[#15261d] px-3 py-2.5 rounded-lg">
                  <span className="text-gray-500">STORE AGENT</span>
                  <span className="text-white font-bold">Vector Database Infra</span>
                </div>
                <div className="flex justify-between bg-[#0e1612] border border-[#15261d] px-3 py-2.5 rounded-lg">
                  <span className="text-gray-500">ORCHESTRATOR</span>
                  <span className="text-white font-bold">Kubernetes (Amazon EKS)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="telemetry" className="bg-[#040605] border-y border-[#14221a] py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-[#0b110e] border border-[#14221a] p-6 rounded-xl">
              <span className="text-3xl md:text-4xl font-black tracking-tight text-[#00ffaa] block">97.4%</span>
              <span className="text-[10px] font-mono font-bold text-gray-500 mt-2 block uppercase tracking-wider">Prediction Accuracy Threshold</span>
            </div>
            <div className="bg-[#0b110e] border border-[#14221a] p-6 rounded-xl">
              <span className="text-3xl md:text-4xl font-black tracking-tight text-[#00ffaa] block">128+</span>
              <span className="text-[10px] font-mono font-bold text-gray-500 mt-2 block uppercase tracking-wider">Enterprise Ingest Integrations</span>
            </div>
            <div className="bg-[#0b110e] border border-[#14221a] p-6 rounded-xl">
              <span className="text-3xl md:text-4xl font-black tracking-tight text-white block">6-8 Wks</span>
              <span className="text-[10px] font-mono font-bold text-gray-500 mt-2 block uppercase tracking-wider">To First Production Insight</span>
            </div>
            <div className="bg-[#0b110e] border border-[#14221a] p-6 rounded-xl">
              <span className="text-3xl md:text-4xl font-black tracking-tight text-[#00ffaa] block">&lt; 150ms</span>
              <span className="text-[10px] font-mono font-bold text-gray-500 mt-2 block uppercase tracking-wider">Complex Risk Scenario Renders</span>
            </div>
          </div>
        </div>
      </section>

      <section id="acceleration" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
        
        <div>
          <span className="text-[10px] font-mono font-black text-[#00ffaa] tracking-widest block uppercase">// PLANNED NVIDIA PRODUCTION ARCHITECTURE</span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase mt-1">Accelerated Data Intelligence SDK Matrix</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {sdkMatrix.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSdk(item.id)}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all font-mono text-xs font-black tracking-wide uppercase flex items-center justify-between ${
                  activeSdk === item.id 
                    ? 'bg-[#00ffaa] text-black border-[#00ffaa] shadow-lg shadow-[#00ffaa]/5' 
                    : 'bg-[#0b110e] hover:bg-[#101b15] text-gray-400 border-[#14221a]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={activeSdk === item.id ? 'text-black' : 'text-[#00ffaa]'}>&#9632;</span>
                  <div>
                    <p>{item.name}</p>
                    <p className={`text-[9px] font-sans normal-case tracking-normal font-medium mt-0.5 ${activeSdk === item.id ? 'text-black/70' : 'text-gray-500'}`}>{item.layer}</p>
                  </div>
                </div>
                <span>&#10140;</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-[#050806] text-white border border-[#14221a] rounded-2xl p-6 md:p-8 min-h-[380px] flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-3 right-4 font-mono text-[8px] tracking-widest text-gray-600 font-bold">ACCELERATION_ENVIRONMENT_SPEC</div>
            
            <div className="space-y-6">
              <div className="border-b border-[#14221a] pb-4">
                <h3 className="text-xl font-black font-mono text-[#00ffaa] uppercase tracking-wide">{currentProfile.name}</h3>
                <p className="text-xs font-medium text-gray-400 mt-2 leading-relaxed">{currentProfile.purpose}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-gray-500 block mb-3 uppercase">// PLANNED SYSTEM ACCELERATION PIPELINES:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProfile.pipelines.map((pipeline, index) => (
                    <div key={index} className="flex items-start font-mono text-[11px] font-semibold text-gray-300 bg-[#0b110e] border border-[#14221a] p-3 rounded-lg">
                      <IntelligenceNode />
                      <span>{pipeline}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#14221a] pt-4 grid grid-cols-3 gap-2 text-center font-mono text-[10px] bg-black/40 p-2.5 rounded-xl border border-[#14221a]">
              <div>
                <span className="text-gray-600 block mb-0.5">COMPUTE_ENGINE</span>
                <span className="text-white font-black uppercase">{currentProfile.metrics.engine}</span>
              </div>
              <div className="border-x border-[#14221a]">
                <span className="text-gray-600 block mb-0.5">TARGET_OPTIMIZATION</span>
                <span className="text-[#00ffaa] font-black uppercase">{currentProfile.metrics.optimization}</span>
              </div>
              <div>
                <span className="text-gray-600 block mb-0.5">TELEMETRY_LOG_MODE</span>
                <span className="text-white font-black uppercase">{currentProfile.metrics.telemetry}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="clusters" className="bg-[#0b110e] border-t border-[#14221a] py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono font-black text-[#00ffaa] tracking-widest block uppercase">// CLUSTER INFRASTRUCTURE SPECS</span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">AWS GPU Compute Infrastructure Target</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
              Prysmors handles large enterprise datasets while driving complex AI parallel arrays for high-frequency predictive forecasting, model profiling, and non-linear data intelligence correlations.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#050806] border border-[#14221a] p-6 rounded-xl">
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#00ffaa] block mb-1">AMAZON EC2 P5 NODE PLATFORMS</span>
              <span className="text-2xl font-black text-white">NVIDIA H100 Tensor Core</span>
              <p className="text-xs text-gray-500 mt-2 font-medium leading-relaxed">Assigned for rapid custom predictive neural network transformations, deep feature model sizing, and heavy concurrent automated analytical workloads.</p>
            </div>

            <div className="bg-[#050806] border border-[#14221a] p-6 rounded-xl">
              <span className="text-[9px] font-mono font-bold tracking-widest text-gray-500 block mb-1">AMAZON EC2 P4D NODE PLATFORMS</span>
              <span className="text-2xl font-black text-gray-400">NVIDIA A100 Tensor Core</span>
              <p className="text-xs text-gray-500 mt-2 font-medium leading-relaxed">Leveraged to benchmark distributed customer intelligence clusters, evaluate Merlin vector indexing matrices, and service low-density model staging workflows.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}
