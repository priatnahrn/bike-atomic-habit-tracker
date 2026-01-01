import { useState } from "react"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import {
    Search, Users, Heart, MessageCircle, Share2,
    MoreHorizontal, MapPin, Award, Flame, Zap
} from "lucide-react"

const Community = () => {
    // --- Mock Data ---
    const myTribes = [
        { id: 1, name: "5AM Club", members: "12.5k", icon: "🌅", color: "bg-orange-100 text-orange-600" },
        { id: 2, name: "Marathon Runners", members: "8.2k", icon: "🏃‍♂️", color: "bg-blue-100 text-blue-600" },
        { id: 3, name: "Bookworms", members: "5.1k", icon: "📚", color: "bg-purple-100 text-purple-600" },
        { id: 4, name: "Meditation", members: "22k", icon: "🧘", color: "bg-green-100 text-green-600" },
    ]

    const posts = [
        {
            id: 1,
            user: { name: "Sarah Jenkins", avatar: "SJ", color: "bg-pink-500", tribe: "5AM Club" },
            time: "2 hours ago",
            content: "Just completed my 30th day of waking up at 5AM! 🎉 It was tough at first, but now I feel so much more productive. Who else is on a streak?",
            stats: { likes: 42, comments: 12 },
            liked: true
        },
        {
            id: 2,
            user: { name: "David Chen", avatar: "DC", color: "bg-blue-500", tribe: "Marathon Runners" },
            time: "4 hours ago",
            content: "Sunday long run done. 15km in the rain, but felt amazing afterwards! 🌧️🏃‍♂️",
            image: true,
            stats: { likes: 89, comments: 24 },
            liked: false
        },
        {
            id: 3,
            user: { name: "Emily Wilson", avatar: "EW", color: "bg-teal-500", tribe: "Bookworms" },
            time: "6 hours ago",
            content: "Just finished 'Atomic Habits'. The concept of 1% improvement is a game changer. Highly recommend!",
            stats: { likes: 156, comments: 45 },
            liked: false
        }
    ]

    const trendingTribes = [
        { id: 1, name: "No Sugar Challenge", members: "+1.2k this week" },
        { id: 2, name: "Code Every Day", members: "+850 this week" },
        { id: 3, name: "Yoga for Beginners", members: "+600 this week" },
    ]

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Community</h1>
                    <p className="text-gray-500 font-medium">Connect with people who share your habits.</p>
                </div>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: My Tribes (3 cols) */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 sticky top-0">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Users size={18} />
                                Your Tribes
                            </h3>
                            <div className="flex flex-col gap-2">
                                {myTribes.map(tribe => (
                                    <button key={tribe.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group">
                                        <span className={`size-10 rounded-lg flex items-center justify-center text-lg ${tribe.color} group-hover:scale-110 transition-transform`}>{tribe.icon}</span>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{tribe.name}</p>
                                            <p className="text-xs font-bold text-gray-400">{tribe.members} Members</p>
                                        </div>
                                    </button>
                                ))}
                                <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left text-primary font-bold text-sm mt-2">
                                    <div className="size-10 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                                        <Search size={18} />
                                    </div>
                                    Discover Tribes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CENTER COLUMN: Feed (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        {/* Create Post Input */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-center">
                            <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">ME</div>
                            <input
                                type="text"
                                placeholder="Share your progress..."
                                className="flex-1 bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-xl px-4 py-3 text-sm font-medium transition-colors outline-none border hover:bg-gray-100"
                            />
                            <button className="p-3 rounded-xl bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-colors">
                                <Zap size={20} className="fill-current" />
                            </button>
                        </div>

                        {/* Posts Feed */}
                        {posts.map(post => (
                            <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                {/* Post Header */}
                                <div className="p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className={`size-10 rounded-full ${post.user.color} text-white flex items-center justify-center font-bold text-sm`}>
                                            {post.user.avatar}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-bold text-gray-900 text-sm">{post.user.name}</h4>
                                                <span className="text-gray-300">•</span>
                                                <span className="text-xs font-bold text-primary bg-orange-50 px-2 py-0.5 rounded-full">{post.user.tribe}</span>
                                            </div>
                                            <p className="text-xs font-bold text-gray-400">{post.time}</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </div>

                                {/* Post Content */}
                                <div className="px-4 pb-2">
                                    <p className="text-gray-800 text-sm leading-relaxed">{post.content}</p>
                                </div>

                                {post.image && (
                                    <div className="mt-3 mx-4 h-64 bg-gray-100 rounded-xl relative overflow-hidden group cursor-pointer">
                                        {/* Placeholder for image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                                            <MapPin size={32} />
                                        </div>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                                    </div>
                                )}

                                {/* Post Actions */}
                                <div className="p-4 mt-2 flex items-center justify-between border-t border-gray-50">
                                    <div className="flex items-center gap-6">
                                        <button className={`flex items-center gap-2 text-sm font-bold transition-colors ${post.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}>
                                            <Heart size={20} className={post.liked ? 'fill-current' : ''} />
                                            {post.stats.likes}
                                        </button>
                                        <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors">
                                            <MessageCircle size={20} />
                                            {post.stats.comments}
                                        </button>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Explore/Trending (3 cols) */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 sticky top-0">
                        <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-6 text-white shadow-lg shadow-orange-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <Award className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-orange-100 uppercase tracking-wider">Weekly Challenge</p>
                                    <h3 className="font-bold text-lg">Walk 10k Steps</h3>
                                </div>
                            </div>
                            <p className="text-sm text-orange-50 mb-4 opacity-90">Join 1,204 others in this week's movement challenge.</p>
                            <button className="w-full py-2.5 bg-white text-primary rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors">Join Challenge</button>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Flame size={18} className="text-orange-500 fill-orange-500" />
                                Trending Tribes
                            </h3>
                            <div className="flex flex-col gap-4 mt-2">
                                {trendingTribes.map(tribe => (
                                    <div key={tribe.id} className="flex justify-between items-center group cursor-pointer">
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{tribe.name}</p>
                                            <p className="text-xs font-bold text-green-500">{tribe.members}</p>
                                        </div>
                                        <button className="bg-gray-50 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">Join</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default Community
