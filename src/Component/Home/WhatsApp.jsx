import { useState } from 'react'
import { MessageCircle, Send, User, Phone, MessageSquare } from 'lucide-react'

// WhatsApp number (country code সহ, + বা 0 ছাড়া): 01804746339 -> 8801804746339
const whatsappNumber = '8801804746339'


const WhatsApp = () => {
    const [form, setForm] = useState({ name: '', phone: '', message: '' })
    const [error, setError] = useState('')

    const update = (e) => setForm((old) => ({ ...old, [e.target.name]: e.target.value }))

    const submit = (e) => {
        e.preventDefault()
        if (!form.name.trim() || !form.phone.trim()) {
            setError('অনুগ্রহ করে নাম ও মোবাইল নম্বর লিখুন।')
            return
        }
        setError('')
        const message = `আসসালামু আলাইকুম, আমি সমস্যায় পড়েছি।\nনাম: ${form.name}\nমোবাইল: ${form.phone}\nবার্তা: ${form.message || 'প্রযোজ্য নয়'}`
        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            '_blank',
            'noopener,noreferrer'
        )
    }

    return (
        <section id="enroll" className="
                    relative
                    my-7
                   
                    overflow-hidden
                    rounded-3xl
                    bg-gradient-to-b
                    from-teal-600
                    to-purple-600
                    text-white
                    p-7
                    md:p-7
                    text-center
                    animate-pulse
                ">
            <div className="mx-auto grid max-w-6xl items-center gap-5 px-4 md:grid-cols-2">
                {/* Left: message */}
                <div className="text-center md:text-left">
                    <Send size={48} className="mx-auto mb-4  md:mx-0" />
                    <p className="text-lg font-medium">সমস্যায় পড়েছি</p>
                    <h2 className="mt-1 text-3xl font-bold md:text-4xl">
                        আপনার শেখার <span className="">যাত্রা!</span>
                    </h2>
                    <p className="mt-3 text-base-content/70">আমাদের সাথে যোগাযোগ করুন</p>
                </div>

                {/* Right: form */}
                <div className=''>
                    <div className="card bg-transparent shadow-md border-white/20 border-2">
                        <div className="card-body">
                            <h3 className="card-title text-xl">সমস্যায় পড়েছি, যোগাযোগ করুন</h3>

                            <form onSubmit={submit} className="mt-2 flex flex-col gap-3">
                                <label className="input input-bordered flex w-full items-center gap-2">
                                    <User size={17} className="opacity-60" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={update}
                                        placeholder="আপনার নাম"
                                        className="grow "
                                    />
                                </label>

                                <label className="input input-bordered flex w-full items-center gap-2">
                                    <Phone size={17} className="opacity-60" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={update}
                                        placeholder="মোবাইল নম্বর"
                                        inputMode="tel"
                                        className="grow"
                                    />
                                </label>

                                <label className="input input-bordered flex w-full items-center gap-2">
                                    <MessageSquare size={17} className="opacity-60" />
                                    <input
                                        type="text"
                                        name="message"
                                        value={form.message}
                                        onChange={update}
                                        placeholder="আপনার সমস্যা"
                                        className="grow"
                                    />
                                </label>

                                {error && (
                                    <div role="alert" className="alert alert-error py-2 text-sm">
                                        <span>{error}</span>
                                    </div>
                                )}

                                <button type="submit" className="btn btn-success mt-1 text-white">
                                    <MessageCircle size={19} />
                                    WhatsApp-এ পাঠান
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default WhatsApp;